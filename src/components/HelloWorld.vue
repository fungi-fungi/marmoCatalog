<template>
  <md-layout md-align="center">
    
    <md-layout md-flex="25">
      <md-card>
        <md-card-media-cover md-text-scrim>
          <md-card-media>
            <img src="../assets/card-sky.jpg" alt="Skyscraper">
          </md-card-media>

          <md-card-area>
            <md-card-header>
              <div class="md-title">Title goes here</div>
              <div class="md-subhead">Subtitle here</div>
            </md-card-header>

            <md-card-actions>
              <md-button>Action</md-button>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </md-layout>

   
  </md-layout>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      projects: [],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
