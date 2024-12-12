<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const url = `${import.meta.env.VITE_API_BASE_URL}/login`;

const password = ref('');
const email = ref('');
const router = useRouter();

async function signIn() {
	try {
		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({
				email: email.value,
				password: password.value,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (!response.ok) {
			const error = await response.json();
			alert(`Error: ${error.msg}`);
		}
		const data = await response.json();
		console.log(data.msg);
		router.push('/');
	} catch (error) {
		console.log(error);
		alert('Username or password is invalid');
	}
}
</script>

<template>
	<h1>Company Name / Logo</h1>
	<form @submit.prevent="signIn">
		<fieldset>
			<legend class="login-legend">Login</legend>
			<label for="email">Email: </label>
			<input
				v-model="email"
				type="text"
				id="email"
				name="email"
				placeholder="JohnDoe@email.com"
			/>
			<br />
			<label for="password">Password: </label>
			<input
				v-model="password"
				type="password"
				id="password"
				name="password"
				placeholder="password"
			/>
			<br />
			<button type="submit">Login</button>
		</fieldset>
	</form>
</template>

<style scoped>
* {
	box-sizing: border-box;
}

h1 {
	text-align: center;
	color: white;
}

form {
	display: grid;
	height: 60vh;
	justify-content: center;
	align-items: center;
	align-content: center;
}

fieldset {
	display: grid;
	width: 500px;
	height: auto;
	color: white;
	font-size: 1.4rem;
	border: 5px solid hsl(242, 98%, 49%);
}

button {
	width: 100%;
	height: 60px;
	font-size: 1.4rem;
	background-color: hsl(340, 100%, 40%);
	color: white;
	outline: none;
	border: none;
}

button:focus {
	border: 2px solid yellow;
}

input {
	font-size: 1.5rem;
	width: 100%;
	height: 60px;
	outline: none;
	border: none;
	padding: 0.5rem;
}
</style>
