import Vue from 'vue'
import vuetify from './plugins/vuetify'

// Components
import './components'

// Plugins
import './plugins'

// Sync router with store
import { sync } from 'vuex-router-sync'

// Application imports
import App from './App'
import { router } from './_helpers'
import store from '@/_store'

// Sync store with router
sync(store, router)

Vue.config.productionTip = false
Vue.component('nl2br', {
  functional: true,
  props: {
    text: {
      type: String,
      required: true
    },
    wrap: {
      type: String,
      default: 'div'
    }
  },
  render (h, context) {
    const lines = context.props.text.split('\n')
    const linesWithBreaks = []
    lines.forEach((line) => {
      linesWithBreaks.push(line, h('br'))
    })
	  return h(context.props.wrap, linesWithBreaks).children
  }
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
