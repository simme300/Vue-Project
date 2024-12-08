<script setup>
import Products from './Products.vue';
</script>

<template>
	<main class="main-section">
		<aside class="filter-section">
			Filter

			<!-- Some dynamic component -->
		</aside>
		<section class="product-section">
			<Products
				productName="Product name"
				description="This is a random item to be sold"
				price="10"
			></Products>
			<Products
				productName="Product name"
				description="This is a random item to be sold"
				price="10"
			></Products>
			<Products
				productName="Product name"
				description="This is a random item to be sold"
				price="10"
			></Products>
			<Products
				productName="Product name"
				description="This is a random item to be sold"
				price="10"
			></Products>
		</section>
		<aside class="order-details">
			Order Details
			<!-- Some dynamic component -->
		</aside>
	</main>
</template>

<style>
.main-section {
	/* width: 100vw; */
	height: 100vh;
	margin-top: 50px;
	display: grid;
	grid-template-areas: 'filter product orders';
	grid-template-columns: 1fr 60vw 1fr;
	gap: 10px;
}

.filter-section {
	background-color: hsl(240, 100%, 10%);
	color: white;
	border-right: 1px solid wheat;
	text-align: center;
}

.product-section {
	display: grid;
	grid-area: product;
	background-color: hsl(240, 100%, 10%);
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 20px 1fr 20px;
	color: white;
	gap: 10px;
}

.order-details {
	background-color: hsl(240, 100%, 10%);
	color: white;
	border-left: 1px solid wheat;
	text-align: center;
}
</style>
