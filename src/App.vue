<template>
  <div id="app">
    <md-toolbar id="toolbar">
      <img src="http://res.cloudinary.com/lm7uywoba/image/upload/c_scale,h_30/v1497968588/branding/Gateway.png" />
    </md-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#toolbar {
  border-bottom: 3px solid #429edc;
  position: fixed;
  width: 100%;
  z-index: 999;
  background: white;
}

</style>
