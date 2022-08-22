import { createRouter, createWebHistory } from "vue-router"

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("@/views/HomeView.vue"),
	},
	{
		path: "/:code",
		name: "section",
		props: true,
		component: () => import("@/views/SectionView.vue"),
	},
	{
		path: "/:code+",
		name: "detail",
		props: true,
		component: () => import("@/views/DetailView.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
