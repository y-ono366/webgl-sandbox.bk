<template>
  <Wrapper>
    <Header />
    <router-view />
  </Wrapper>
</template>

<script>
import { Wrapper } from './components/styles/Index.js'
import Header from '@/components/Header'
export default {
  name: 'Index',
  components: {
    Wrapper,
    Header
  }
}
</script>

<style>
body {
  margin: 0;
}
full-canvas {
  background-color: #000;
  width: 100vw;
  height: 100vh;

  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: fixed;
}
</style>
