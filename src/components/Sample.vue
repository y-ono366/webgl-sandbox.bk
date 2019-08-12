<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from 'three';

export default {
  name: 'Sample',
  data() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const renderer = null;
    const geometry = new THREE.OctahedronGeometry(1, 0);
    const material = new THREE.MeshNormalMaterial({ color: 0x6699ff, wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    return { scene, width, height, renderer, camera, mesh, directionalLight };
  },

  mounted() {
    const $canvas = document.getElementById('canvas');
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
    });
    this.renderer.setSize(this.width, this.height);
    this.camera.position.set(0, 0, 4);
    this.scene.add(this.mesh);
    this.directionalLight.position.set(1, 1, 1);
    this.scene.add(this.directionalLight);

    this.tick();
  },
  methods: {
    tick() {
      this.mesh.rotation.y += 0.02;
      this.mesh.rotation.x += 0.01;
      this.renderer.render(this.scene, this.camera);
      window.requestAnimationFrame(this.tick);
    },
  },
};
</script>
