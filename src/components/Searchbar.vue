<script setup>
import { ref } from 'vue';
</script>

<template>
	<form class="search-form">
		<div class="search-container">
			<input type="search" id="searchq" name="q" placeholder="Search" />
			<i class="pi pi-search"></i>
		</div>
	</form>
</template>

<style scoped>
.search-form {
	display: flex;
	justify-content: center;
	margin: 20px 0;
}

.search-container {
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 60vw;
	padding: 0.5rem;
	background-color: hsl(340, 100%, 40%);
	border: 1px solid white;
	border-radius: 1000px;
	color: white;
}

input {
	display: flex;
	width: inherit;
	background-color: inherit;
	color: inherit;
	outline: none;
	border: none;
	font-size: 2rem;
}

input:focus::placeholder {
	color: hsl(340, 100%, 80%);
}

.pi {
	margin-right: 10px;
	font-size: 2rem;
}

.search-container:hover {
	box-shadow: 0 0 20px 0 hsl(330, 100%, 80%);
}
</style>
