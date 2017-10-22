<template>
  <div>
    <div id="marmo" class="marmo"></div>

    <md-dialog-alert
      :md-title="dialog.title"
      :md-content-html="dialog.contentHtml"
      :md-ok-text="dialog.ok"
      @close="onClose"
      ref="dialog">
    </md-dialog-alert>
  </div>
</template>

<script>
import * as CONSTANTS from './../config.js'
import VueScript2 from 'vue-script2'

export default {
  data () {
    return {
      dialog: {
        ok: CONSTANTS.DIALOG_BUTTON_TEXT,
        title: CONSTANTS.DIALOG_TITLE,
        contentHtml: CONSTANTS.DIALOG_BODY
      }
    }
  },
  methods: {
    init() {
      let that = this;
      VueScript2.load(CONSTANTS.MARMOSET_URL).then(function () {
          that.loadMarmo();
      })
    },
    loadMarmo() {

      if (this.$route.query.id) {

        let screenWidth = Math.max(
          document.documentElement.clientWidth, window.innerWidth || 0
        );

        let screenHeight = Math.max(
          document.documentElement.clientHeight, window.innerHeight || 0
        );

        let toolbarHeight = document.getElementById('toolbar').clientHeight;
        let marmoHeight = screenHeight - toolbarHeight - 3;

        var myviewer = new marmoset.WebViewer(
          screenWidth,
          marmoHeight,
          CONSTANTS.MARMOSET_BACKET + this.$route.query.id +'.mview'
        );

        document.getElementById('marmo').appendChild( myviewer.domRoot );

        myviewer.loadScene();
        myviewer.onLoad = function() { console.log('done') };

      } else {
        this.$refs['dialog'].open()
      }
    },
    onClose() {
      this.$router.replace('/')
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style>
#marmo {
  height: 100%;
  min-height: 100%;
  width: 100%;
}
</style>
