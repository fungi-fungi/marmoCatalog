<template>
  <div id="app">
    <md-toolbar id="toolbar">
      <img v-bind:src="logo" />
    </md-toolbar>
    <div class="wrapper">
      <router-view/>
    </div>
  </div>

</template>

<script>
import * as CONSTANTS from './config.js'

export default {
  data () {
    return {
      logo: CONSTANTS.LOGO
    }
  }
}
</script>

<style>
.wrapper {
  padding-top: 64px;
}

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
