<template>
  <div id="app">
    <md-toolbar id="toolbar" class="md-dense">
      <h2 class="md-title" style="flex: 1">GW Marmos</h2>
    </md-toolbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#toolbar {
  margin-bottom: 40px;
}

</style>
