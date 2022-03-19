import Vue from 'vue'
import VueRouter from 'vue-router'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
    id: 'UA-39025849-2',
    params: {
      send_page_view: true
    },
    appName: 'mrisaacs',
    pageTrackerScreenviewEnabled: true
  },
  onBeforeTrack () {
    console.log('onBeforeTrack')
  },
  onAfterTrack () {
    console.log('onAfterTrack')
  }
}, new VueRouter({
  routes: [
    { name: 'Startseite', path: '/' },
    { name: 'Memos', path: '/memos' },
    { name: 'Zitate', path: '/quotes' },
    { name: 'Projekte', path: '/projects' }
  ]
}))
