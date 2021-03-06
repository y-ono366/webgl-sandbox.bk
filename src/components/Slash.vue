<template>
  <canvas id="canvas" class="full-canvas"></canvas>
</template>

<script>
import * as THREE from 'three'
import AssetsImage from '@/assets/Smoke-Element.png'
import StoneImage from '@/assets/stone.jpg'

export default {
  name: 'Slash',
  data() {
    const width = window.innerWidth
    const height = window.innerHeight
    const renderer = null
    const scene = new THREE.Scene()
    const geometry = new THREE.Geometry()
    const vertices = [
      new THREE.Vector3(3.189, 6.472, 0),
      new THREE.Vector3(4.811, 6.472, 0),
      new THREE.Vector3(-3.189, -6.472, 0),
      new THREE.Vector3(-4.811, -6.472, 0),
      new THREE.Vector3(3.189, 6.472, 0)
    ]

    const faces = [new THREE.Face3(4, 3, 2), new THREE.Face3(0, 2, 1)]

    const camera = new THREE.PerspectiveCamera(40, width / height, 1, 1000)
    const smokeTexture = THREE.ImageUtils.loadTexture(AssetsImage)
    const stoneTexture = THREE.ImageUtils.loadTexture(StoneImage)
    const smokeMaterial = new THREE.MeshLambertMaterial({
      color: 0xffffff,
      map: smokeTexture,
      opacity: 0.25,
      transparent: true
    })
    const light = new THREE.DirectionalLight(0xffffff, 0.5)
    const clock = new THREE.Clock()
    const flash = new THREE.PointLight(0x062d89, 30, 500, 1.7)

    let smokeParticles = []
    return {
      width,
      height,
      renderer,
      scene,
      geometry,
      camera,
      vertices,
      smokeMaterial,
      smokeParticles,
      light,
      faces,
      clock,
      flash,
      stoneTexture
    }
  },

  mounted() {
    const $canvas = document.getElementById('canvas')
    this.renderer = new THREE.WebGLRenderer({
      canvas: $canvas
    })
    this.camera.position.set(0, 0, 100)

    for (let i = 0; i < this.vertices.length; i++) {
      this.geometry.vertices.push(this.vertices[i])
    }

    for (let j = 0; j < this.faces.length; j++) {
      this.geometry.faces.push(this.faces[j])
    }

    const face_material = new THREE.MeshStandardMaterial({ color: 0x808080, map: this.stoneTexture })
    const face_mesh = new THREE.Mesh(this.geometry, face_material)
    const face_mesh2 = new THREE.Mesh(this.geometry, face_material)
    const face_mesh3 = new THREE.Mesh(this.geometry, face_material)
    const face_mesh4 = new THREE.Mesh(this.geometry, face_material)
    this.geometry.computeFaceNormals()
    this.geometry.computeVertexNormals()
    this.scene.add(face_mesh)
    this.scene.add(face_mesh2)
    this.scene.add(face_mesh3)
    this.scene.add(face_mesh4)

    face_mesh.position.set(-10.5, 0, -5)
    face_mesh2.position.set(-3.5, 0, -5)
    face_mesh3.position.set(3.5, 0, -5)
    face_mesh4.position.set(10.5, 0, -5)

    this.renderer.setSize(this.width, this.height)

    let smokeGeo = new THREE.PlaneGeometry(50, 50)
    for (let p = 0; p < 150; p++) {
      let particle = new THREE.Mesh(smokeGeo, this.smokeMaterial)
      particle.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, 0)
      particle.rotation.z = Math.random() * 36
      this.scene.add(particle)
      this.smokeParticles.push(particle)
    }

    this.flash.position.set(0, 0, 1)
    this.scene.add(this.flash)

    this.light.position.set(0, 0, 1)
    this.scene.add(this.light)

    this.tick()
  },
  methods: {
    tick() {
      requestAnimationFrame(this.tick)
      this.renderer.render(this.scene, this.camera)
      this.delta = this.clock.getDelta()
      this.evolveSmoke()
      this.flashAnimation()
    },
    evolveSmoke() {
      let sp = this.smokeParticles.length
      while (sp--) {
        this.smokeParticles[sp].rotation.z += this.delta * 0.15
      }
    },
    flashAnimation() {
      if (Math.random() > 0.97 || this.flash.power > 100) {
        if (this.flash.power < 100) this.flash.position.set(Math.random() * 200 - 100, Math.random() * 200 - 100, 1)
        this.flash.power = 20 + Math.random() * 400
      }
    }
  }
}
</script>
