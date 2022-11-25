# Using Shaders through Three.js
src/webgl/createFog.ts has the most simple shader material. You can learn about the shading in Three.js by reading it and [the documentation of ShaderMaterial](https://threejs.org/docs/#api/en/materials/ShaderMaterial).

Note that `transparent: true` is required to draw semi-transparent objects, and the drawing order of semi-transparent objects is determined by the meshs' [`renderOrder`](https://threejs.org/docs/#api/en/core/Object3D.renderOrder).
