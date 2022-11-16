import * as THREE from 'three'
import { toTrianglesDrawMode } from "three/examples/jsm/utils/BufferGeometryUtils"
import { onUpdate } from '../hooks'
import { subscribe } from '../saveData'
import createContrailFrag from './createContrail.frag'
import createContrailVert from './createContrail.vert'
import { enableSelectiveBloom } from './createSelectiveBloomPass'

const airplaneSpeedAgainstGround = 0.005
const samplingInterval = 2

export default (source: THREE.Object3D) => {
    const segments = 120
    const mesh = new THREE.Mesh(
        toTrianglesDrawMode(new THREE.BufferGeometry()
            .setFromPoints(Array(segments).fill(0)
                .flatMap(() => [
                    new THREE.Vector3(source.position.x, 0, source.position.z + 0.1),
                    new THREE.Vector3(source.position.x, 0, source.position.z - 0.1)])), THREE.TriangleStripDrawMode),
        new THREE.ShaderMaterial({
            vertexShader: createContrailVert,
            fragmentShader: createContrailFrag,
            transparent: true,
        }),
    )
    mesh.geometry.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(
        Array(segments).fill(0).flatMap((_, i) => [-1.0, i / (segments - 1), 1.0, i / (segments - 1)])), 2))
    onUpdate.add((t) => {
        if (t % samplingInterval == 0) { return }
        const positions = mesh.geometry.attributes.position as THREE.BufferAttribute
        for (let i = positions.count - 1; i >= 2; i--) {
            positions.setX(i, positions.getX(i - 2) - airplaneSpeedAgainstGround * samplingInterval)
            positions.setY(i, positions.getY(i - 2))
            positions.setZ(i, positions.getZ(i - 2))
        }
        positions.setX(0, source.position.x)
        positions.setY(0, source.position.y)
        positions.setZ(0, source.position.z + 0.1)
        positions.setX(1, source.position.x)
        positions.setY(1, source.position.y)
        positions.setZ(1, source.position.z - 0.1)
        mesh.geometry.attributes.position!.needsUpdate = true
        mesh.geometry.computeVertexNormals()
    })
    enableSelectiveBloom(mesh)

    subscribe((state, prev) => {
        if (state.stage === prev.stage) { return }
        // Clear the geometry on stage transition
        const positions = mesh.geometry.attributes.position as THREE.BufferAttribute
        for (let i = 0; i < positions.count; i++) {
            positions.setX(i, source.position.x)
            positions.setZ(i, source.position.z)
        }
    })

    return mesh
}
