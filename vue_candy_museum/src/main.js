import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { LayoutPlugin } from 'bootstrap-vue'
import { ModalPlugin } from 'bootstrap-vue'
import { CardPlugin } from 'bootstrap-vue'
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
import { VBVisible } from 'bootstrap-vue'


Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.directive('b-visible', VBVisible)
Vue.use(CardPlugin)
Vue.use(ModalPlugin)
Vue.use(LayoutPlugin)
Vue.use(BootstrapVue)



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
