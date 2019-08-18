<template>
    <div>
      <div>
        <StyledTitle>
          <router-link to="/rotate">rotate</router-link>
        </StyledTitle>
      </div>
      <div>
        <router-link to="/lines">lines</router-link>
      </div>
      <div>
        <router-link to="/sample">sample</router-link>
      </div>
      <div>
        <router-link to="/triangle">triangle</router-link>
      </div>
      <div>
        <router-link to="/slash">slash</router-link>
      </div>
    </div>
</template>

<script>
import { StyledTitle } from './styles/Base.js'
export default {
  name: 'Index',
  props: {
    msg: String,
  },
  components: {
    StyledTitle
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
