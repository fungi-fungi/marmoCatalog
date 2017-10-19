<template>

  <md-layout md-align="center">

      <div class="card-holder">

        <md-card v-for="project in projects" :key="project.marmoId" md-with-hover class="card">
          <md-card-media>
            <progressive-img
              v-bind:src="'' + project.thumbnail  + ''"
              placeholder="https://res.cloudinary.com/lm7uywoba/image/upload/c_scale,w_600/v1496342344/branding/powerup_background.jpg"
              :blur="0"
            />
          </md-card-media>

          <a class="card-link" v-bind:href="'' + project.link  + ''" target="_blank">
            <md-card-header>
              <div class="md-title">{{ project.client }}</div>
              <div class="md-subhead">Size: {{ project.size }}</div>
            </md-card-header>
          </a>

        </md-card>

      </div>
  </md-layout>

</template>

<script>
export default {
  data () {
    return {
      link: 'https://je9l0ppvp4.execute-api.us-east-2.amazonaws.com/beta/api',
      projects: []
    }
  },
  methods: {
    getProjects: function () {
      this.$http.get(this.link + '/designs').then(function (response) {
        this.projects = response.body.Items
      })
    }
  },
  mounted: function () {
    this.getProjects()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
    color: #2c3e50;
    text-decoration: none;
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
