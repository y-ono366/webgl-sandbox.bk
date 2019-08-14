<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from 'three';
import AssetsImage from '@/assets/Smoke-Element.png';

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

    const material = new THREE.LineBasicMaterial({ color: 0xffffff });
    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000);
    const line = null;
    const line2 = null;
    const line3 = null;
    const line4 = null;
    const smokeTexture = THREE.ImageUtils.loadTexture(AssetsImage);
    const smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: smokeTexture,
      opacity: 0.2,
      transparent: true,
    });
    const light = new THREE.DirectionalLight(0xffffff, 0.5);

    let smokeParticles = [];
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
      smokeMaterial,
      smokeParticles,
      light,
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

    let smokeGeo = new THREE.PlaneGeometry(50, 50);
    for (let p = 0; p < 150; p++) {
      let particle = new THREE.Mesh(smokeGeo, this.smokeMaterial);
      particle.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, 0);
      particle.rotation.z = Math.random() * 36;
      this.scene.add(particle);
      this.smokeParticles.push(particle);
    }

    this.light.position.set(0, 0, 1);
    this.scene.add(this.light);

    this.tick();
  },
  methods: {
    tick() {
      requestAnimationFrame(this.tick);
      this.renderer.render(this.scene, this.camera);
      this.evolveSmoke();
    },
    evolveSmoke() {
      let sp = this.smokeParticles.length;
      while (sp--) {
        this.smokeParticles[sp].rotation.z += 0.002;
      }
    },
  },
};
</script>
