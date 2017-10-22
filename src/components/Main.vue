<template>

  <md-layout md-column class="wrapper">
    <md-layout md-align="center">

        <div class="card-holder">

          <md-card v-for="project in projects" :key="project.marmoId" md-with-hover class="card">
            <md-card-media>
              <progressive-img
                v-bind:src="project.thumbnail"
                v-bind:placeholder="placeholder"
                :blur="0"
              />
            </md-card-media>

            <router-link :to="{ path: 'projects', query: { id: project.file }}" class="card-link">
              <md-card-header>
                <div class="md-title">{{ project.client }}</div>
                <div class="md-subhead">Size: {{ project.size }}</div>
              </md-card-header>
            </router-link>

          </md-card>
        </div>

    </md-layout>

    <infinite-loading @infinite="infiniteHandler">
      <span slot="no-more">That's it for now</span>
    </infinite-loading>

  </md-layout>

</template>

<script>
import * as CONSTANTS from './../config.js'
import InfiniteLoading from 'vue-infinite-loading'

export default {
  data () {
    return {
      projects: [],
      placeholder: CONSTANTS.PLACEHOLDER
    }
  },
  methods: {
    getProjects: function ($state) {

      this.$http.get(CONSTANTS.API_URL + '/designs', {
        params: { offset: this.projects.length }
      }).then(function (response) {

        if (response.body.length == 0) {
          $state.complete();
        }

        this.projects = this.projects.concat(response.body);
        $state.loaded();

      })
    },
    infiniteHandler($state) {
      this.getProjects($state)
    },
  },
  components: {
    InfiniteLoading,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  padding-top: 16px;
}

.card-holder {
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1200px;
  justify-content: center;
}

.card {
  display: inline-block;
  width: calc(100% * (1/4) - 30px);
}

.card-holder > div.md-card {
  margin: 8px;
}

a.card-link, a.card-link:hover {
    color: #2c3e50 !important;
    text-decoration: none !important;
}

/* iPhone, etc portrait ---- */
@media only screen and (min-width: 100px) {
  .card-holder .card {
    width: calc(100% - 30px);
  }
}

/* iPhone, etc landscape ---- */
@media only screen and (min-width: 480px) {
  .card-holder .card {
    width: calc(100% * (1/2) - 30px);
  }
}

/* iPad, tablets etc portrait ---- */
@media only screen and (min-width: 768px) {
  .card-holder .card {
  width: calc(100% * (1/4) - 30px);
  }
}

/* Laptops, Desktops, etc ---- */
@media only screen and (min-width: 1024px) {
  .card-holder .card {
    width: calc(100% * (1/4) - 30px);
  }
}

@media only screen and (min-width: 1200px) {
  .card-holder .card {
    width: calc(100% * (1/4) - 30px);
  }
}

</style>
