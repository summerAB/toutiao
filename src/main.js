import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/font/iconfont.css"
// rem 适配
import "amfe-flexible"
// 加载vant核心组件库
import vant from "vant"
// 加载vant全局样式
import "vant/lib/index.css"
// 注册使用vant组件库

Vue.use(vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
