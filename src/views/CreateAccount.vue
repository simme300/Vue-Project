<script setup></script>

<template>
	<h1>Company Name / Logo</h1>
	<form>
		<fieldset>
			<legend class="login-legend">Create Account</legend>
			<label for="fname">Firstname</label>
			<input type="text" id="fname" name="fname" placeholder="Firstname" />
			<br />
			<label for="lname">Lastname</label>
			<input type="text" id="lname" name="lname" placeholder="Lastname" />
			<br />
			<label for="email">Email</label>
			<input
				type="text"
				id="email"
				name="email"
				placeholder="JohnDoe@email.com"
			/>
			<br />
			<label for="password">Password</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="password
      "
			/>
			<br />
			<label for="password">Verify password</label>
			<input
				type="password"
				id="password"
				name="password"
				placeholder="password
      "
			/>
			<br />
			<button class="submit-btn" type="submit">Create Account</button>
		</fieldset>
	</form>
	<div class="sign-in">
		<router-link to="/login">Sign in</router-link>
	</div>
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
	height: 80vh;
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

legend {
	font-size: 2rem;
	color: hsl(340, 100%, 70%);
}

.submit-btn {
	width: 100%;
	height: 50px;
	font-size: 1.4rem;
	background-color: hsl(340, 100%, 40%);
	color: white;
	outline: none;
	border: none;
}

.submit-btn:focus {
	border: 2px solid yellow;
}

input {
	font-size: 1.5rem;
	width: 100%;
	height: 50px;
	outline: none;
	border: none;
	padding: 0.5rem;
}

.sign-in {
	outline: none;
	border: none;
	margin: auto;
	text-align: center;
}

.sign-in a {
	border: none;
	color: white;
	font-size: 2rem;
}

.sign-in a:focus {
	color: hsl(340, 100%, 70%);
	border: none;
	outline: none;
}
</style>
