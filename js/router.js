const routes = [
        {
            path: '/scene1',
            component: Scene1,
            name: "Scene1"
        },
        {
            path: '/scene2',
            component: Scene2,
            name: "Scene2"
        },
        {
            path: '/scene3',
            component: Scene3,
            name: "Scene3"
        },
    ]


const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes

})

vm.use(router)