import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Project from '@/components/Project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/projects',
      name: 'Project',
      component: Project
    }
  ]
})
