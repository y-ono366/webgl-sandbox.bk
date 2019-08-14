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
      new THREE.Vector3(3.189, 6.472, 0),
      new THREE.Vector3(4.811, 6.472, 0),
      new THREE.Vector3(-3.189, -6.472, 0),
      new THREE.Vector3(-4.811, -6.472, 0),
      new THREE.Vector3(3.189, 6.472, 0),
    ];

    // const faces = [new THREE.Face3(0, 2, 1)];
    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    const line = null;
    const line2 = null;
    const line3 = null;
    const line4 = null;
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
      line2,
      line3,
      line4,
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
    this.camera.position.set(0, 0, 100);

    for (let i = 0; i < this.vertices.length; i++) {
      this.geometry.vertices.push(this.vertices[i]);
    }

    this.renderer.setSize(this.width, this.height);

    this.line = new THREE.Line(this.geometry, this.material);
    this.line2 = new THREE.Line(this.geometry, this.material);
    this.line3 = new THREE.Line(this.geometry, this.material);
    this.line4 = new THREE.Line(this.geometry, this.material);
    this.scene.add(this.line);
    this.scene.add(this.line2);
    this.scene.add(this.line3);
    this.scene.add(this.line4);
    this.line.position.set(-10.5, 0, 0);
    this.line2.position.set(-3.5, 0, 0);
    this.line3.position.set(3.5, 0, 0);
    this.line4.position.set(10.5, 0, 0);

    this.tick();
  },
  methods: {
    tick() {
      // this.line.rotation.y += 0.02;
      requestAnimationFrame(this.tick);
      this.renderer.render(this.scene, this.camera);
    },
  },
};
</script>
