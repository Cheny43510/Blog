import Vue from 'vue'
import App from './App.vue'

//引入tailwindcss
import "./assets/tailwind.css"
//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入路由
import router from '@/router'
//使用element-ui
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
