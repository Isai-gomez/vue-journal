export default{
    name:'auth',
    component:() =>
    import(/* webpackChunkName: "AuthLayout" */ '../layouts/AuthLayout.vue'),
    children:[
        {
            path:'',
            name:'login',
            component:import(/* webpackChunkName: "AuthLayout" */ '../views/Login.vue')
        } ,
        {
            path:'/register',
            name:'register',
            component:import(/* webpackChunkName: "AuthLayout" */ '../views/Register.vue')
        }
    ]
}