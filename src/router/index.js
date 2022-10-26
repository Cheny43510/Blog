import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Home from '@/views/Home'


export default new VueRouter({
    routes:[
        {
            path:'/',
            component:Home
        }
    ]
})