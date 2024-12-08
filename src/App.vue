<script setup>
import Navbar from './components/Navbar.vue';
import Searchbar from './components/Searchbar.vue';
import ProductCategory from './components/ProductCategory.vue';
import ProductDescription from './components/ProductDescription.vue';

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
	<ProductCategory :titles="categoryTitles"></ProductCategory>
	<ProductDescription></ProductDescription>
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
