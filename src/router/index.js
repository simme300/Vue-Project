import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: '/', name: 'Home', component: Home },
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/Login.vue'),
		},
		{
			path: '/create',
			name: 'Create',
			component: () => import('../views/CreateAccount.vue'),
		},
		{
			path: '/contact',
			name: 'Contact',
			component: () => import('../views/Contact.vue'),
		},
		{
			path: '/about',
			name: 'AboutPage',
			component: () => import('../views/AboutPage.vue'),
		},
	],
});

export default router;
