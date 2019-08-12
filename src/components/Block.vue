<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "Block",
  data() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const renderer = null;
    const scene = new THREE.Scene();
    const geometry = new THREE.Geometry();
    const line = new THREE.Line(geometry, new THREE.LineBasicMaterial( { color: 0x990000} ) );
    return {width ,height ,line,renderer ,scene ,geometry};
  },

  mounted() {
    this.geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 150, 0, 0) ) );  
    this.geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 150, 0) ) );  
    this.geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 0, 0, 150) ) ); 
    this.geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( 150, 0, 0) ) ); 

    this.scene.add( this.line );
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
