import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import CreateAccount from '../views/CreateAccount.vue';

const router = createRouter({
	history: createWebHistory(),

	routes: [
		{ path: '/login', name: 'Login', component: Login },
		{ path: '/', name: 'Home', component: Home },
		{ path: '/create', name: 'Create', component: CreateAccount },
	],
});

export default router;
