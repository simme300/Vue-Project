<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
	<router-view></router-view>
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
