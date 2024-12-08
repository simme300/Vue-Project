<script setup>
const props = defineProps(['productName', 'description', 'price']);
</script>

<template>
	<div class="product-container">
		<button class="productname">{{ productName }}</button>
		<p class="description">{{ description }}</p>
		<button class="info">{{ price }}</button>
	</div>
</template>

<style>
.product-container {
	display: grid;
	width: 200px;
	height: 300px;
	border-radius: 8px;
	border: 3px solid white;
	grid-template-areas:
		'productname'
		'description'
		'info';

	grid-template-columns: 1fr;
	grid-template-rows: 75px 1fr 75px;
}

.productname {
	display: flex;
	justify-content: center;
	grid-area: productname;
	font-size: 1.2rem;
	color: white;
	border-bottom: 1px solid white;
	background-color: hsl(240, 100%, 10%);
}
</style>
