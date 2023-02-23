import { RouteRecordRaw, Router, createRouter, createWebHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("../pages/Main.vue"),
    },
    {
        path: "/privacybeleid",
        component: () => import("../pages/Privacy.vue"),
    },
    {
        path: "/succes",
        name: "succes",
        component: () => import("../pages/Succes.vue"),
        props: true
    }
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

export default router;