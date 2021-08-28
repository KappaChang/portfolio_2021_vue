<template>
	<div class="navigator">
		<ul>
			<li @click="$router.push({name: 'Home'})">TOP</li>
			<li @click="$router.push({name: 'Products'})">PROUCTS</li>
			<li @click="$router.push({name: 'About'})">ABOUT</li>
			<li @click="$router.push({name: 'Contact'})">CONTACT</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'navigator',
	data() {
		return {

		}
	}
}
</script>