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
    const scene = new THREE.Scene();
    return { scene, width, height, renderer };
  },

  mounted() {
    const $canvas = document.getElementById('canvas');
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas,
    });
    this.renderer.setSize(this.width, this.height);
  },
  methods: {},
};
</script>
