<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Lines",
    data() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const renderer = null;
        const scene = new THREE.Scene();
        const box_geometry = new THREE.BoxGeometry(9, 9, 1400);
        const box_material = new THREE.MeshPhongMaterial({color: 0xAAAA34});
        const box = new THREE.Mesh(box_geometry,box_material);
        const camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
        const line_material = new THREE.LineBasicMaterial({color: 0xAAAA34});
        const line_geometry = new THREE.Geometry();
        const line = new THREE.Line(line_geometry, line_material);
        const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
        return {width ,height ,renderer ,scene ,box_geometry ,box_material ,box ,camera ,line_material ,line_geometry ,line ,directionalLight};
    },

    mounted() {
        const $canvas = document.getElementById("canvas");
        this.renderer = new THREE.WebGLRenderer({
            canvas: $canvas
        });
        this.renderer.setSize(this.width, this.height);
        this.camera.position.set(0, 0, +2000);
        this.line_geometry.vertices.push(
            new THREE.Vector3(-100, 0, 0),
            new THREE.Vector3(0, 100, 0),
            new THREE.Vector3(100, 0, 0),
            new THREE.Vector3(0, -100, 0)
        );

        this.scene.add(this.line);
        this.scene.add(this.box);
        this.scene.add(this.directionalLight);

        this.tick();

    },
  methods: {
      tick() {
          requestAnimationFrame(this.tick);
          // 箱を回転させる
          this.box.rotation.x += 3;
          this.box.rotation.y += 0.02;
          // レンダリング
          this.renderer.render(this.scene, this.camera);
      }
  }
};
</script>
