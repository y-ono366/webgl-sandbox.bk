<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Slash',
  data() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const renderer = null;
    const scene = new THREE.Scene();
    const geometry = new THREE.Geometry();
    const vertices = [
      new THREE.Vector3(-1.622, 12.944, 0),
      new THREE.Vector3(0, 12.944, 0),
      new THREE.Vector3(-8, 0, 0),
      new THREE.Vector3(-9.622, -0, 0),
      new THREE.Vector3(-1.622, 12.944, 0),
    ];
    // const faces = [new THREE.Face3(0, 2, 1)];
    const material = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    const line = null;
    // const face_material = null;
    // const face_mesh = null;
    return {
      width,
      height,
      renderer,
      scene,
      material,
      geometry,
      camera,
      line,
      vertices,
      // faces,
      // face_material,
      // face_mesh,
    };
  },

  mounted() {
    const $canvas = document.getElementById('canvas');
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
    });
    this.camera.position.set(0, 0, 90);

    for (let i = 0; i < this.vertices.length; i++) {
      this.geometry.vertices.push(this.vertices[i]);
    }

    // for (let j = 0; j < this.faces.length; j++) {
    //   this.geometry.faces.push(this.faces[j]);
    // }

    // this.geometry.computeFaceNormals();
    // this.geometry.computeVertexNormals();
    //
    // this.face_material = new THREE.MeshNormalMaterial();
    // this.face_mesh = new THREE.Mesh(this.geometry, this.face_material);
    // this.scene.add(this.face_mesh);

    this.renderer.setSize(this.width, this.height);

    this.line = new THREE.Line(this.geometry, this.material);
    this.scene.add(this.line);

    this.tick();
  },
  methods: {
    tick() {
      // this.line.rotation.y += 0.03;
      requestAnimationFrame(this.tick);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
