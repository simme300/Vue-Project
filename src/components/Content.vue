<script setup>
import { ref } from 'vue';

defineProps({
	titles: {
		type: Array,
		default: () => [],
	},
});
</script>

<template>
	<main class="main-content">
		<section class="content-section">
			<button v-for="title in titles" :key="title" class="item">
				{{ title }}
			</button>
		</section>
	</main>
</template>

<style>
.main-content {
	display: flex;
	justify-content: center;
}
.content-section {
	position: relative;
	display: inline-block;
	width: 60vw;
	height: auto;
}

.content-section > * {
	border: 3px solid white;
	background-color: inherit;
	color: white;
	padding: 0.2rem;
	font-size: 1.2rem;
	border-radius: 1000px;
	margin: 5px 5px;
	text-align: start;
	padding: 0.8rem;
}

.item:hover,
.item:focus {
	background-color: hsl(200, 100%, 30%);
}
</style>
