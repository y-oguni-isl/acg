# Using Shaders through Three.js
You can learn about the shading in Three.js by reading it and [the documentation of ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial).

```typescript
// You can make an THREE.Material from vertex and fragment shaders.
const material = new THREE.ShaderMaterial({
	vertexShader: `void main() { gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
	fragmentShader: `void main() { gl_FragColor = vec4(color * 1.5, 1.0); }`
})

// You need to pass the material to an THREE.Object3D (or THREE.Mesh, which is an subclass of THREE.Object3D) to use it.
const object = new THREE.Mesh(
    new THREE.IcosahedronGeometry(),  // shape
    material, // shader
)

scene.add(object)
```

Note that `transparent: true` is required to draw semi-transparent objects, and the drawing order of semi-transparent objects is determined by the meshs' [`renderOrder`](https://threejs.org/docs/#api/en/core/Object3D.renderOrder).
