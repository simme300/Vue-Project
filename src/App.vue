<script setup>
import Navbar from './components/Navbar.vue';
import Searchbar from './components/Searchbar.vue';
import Content from './components/Content.vue';

const categoryTitles = [
	'Category',
	'Category',
	'Category',
	'Category',
	'Category',
	'Category',
	'Category',
];
</script>

<template>
	<Navbar></Navbar>
	<Searchbar></Searchbar>
	<Content :titles="categoryTitles"></Content>
</template>

<style>
* {
	box-sizing: border-box;
}

body {
	margin: 0;
	background-color: hsl(240, 100%, 10%);
}

#app {
	min-height: 100vh;
}
</style>
