import VueRouter from "vue-router"
import Login from "../view/login.vue"
import register from "../view/register.vue";
import home from "../view/Home.vue";
export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:"/",
            redirect:"/login"
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:register
        },
        {
            path:"/home",
            component:home
        }
    ]
})