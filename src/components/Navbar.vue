<script setup>
import { ref } from 'vue';

defineProps({
	title: {
		type: String,
		default: 'Company Name',
	},
});
</script>

<template>
	<span class="pi pi-bars"></span>
	<div class="nav-container">
		<nav class="nav-bar">
			<ul class="nav-list">
				<li class="nav-item"><a href="#"></a>Home</li>
				<li class="nav-item"><a href="#"></a>About</li>
				<li class="nav-item"><a href="#"></a>Contact</li>
			</ul>
		</nav>
		<span class="header">{{ title }}</span>
		<nav class="nav-two">
			<ul class="nav-list-two">
				<li class="nav-item-two"><a href="#"></a>Login</li>
				<li class="pi pi-cart-arrow-down"></li>
				<li class="pi pi-cog"></li>
			</ul>
		</nav>
	</div>
</template>

<style>
.nav-container {
	display: flex;
	justify-content: space-around;
	padding: 0 0.8rem;
	border-bottom: 1px solid white;
	align-items: center;
	color: white;
}

.nav-list,
.nav-list-two {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	list-style: none;
}

.nav-list,
.nav-list-two a {
	text-decoration: none;
	color: white;
}

.nav-item,
.nav-item-two {
	padding: 0.5rem;
	font-size: 1.2rem;
}

.nav-item:hover,
.nav-item-two:hover {
	background-color: hsl(200, 100%, 30%);
	border-radius: 1000px;
}

.nav-item.active,
a:focus {
	background-color: hsl(200, 100%, 30%);
	border-radius: 1000px;
}

.header {
	display: flex;
	font-size: 2rem;
}
.header:hover {
	cursor: pointer;
}

.pi-bars {
	position: absolute;
	color: white;
	font-size: 1.5rem;
	margin: 25px;
}

.pi-bars:hover {
	cursor: pointer;
	color: hsl(200, 100%, 30%);
}

.pi-cart-arrow-down,
.pi-cog {
	font-size: 1.5rem;
	padding: 0.5rem;
	margin-left: 20px;
}

.pi-cart-arrow-down:hover,
.pi-cog:hover {
	cursor: pointer;
	color: hsl(200, 100%, 30%);
}
</style>
