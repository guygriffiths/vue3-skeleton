<script setup lang="ts">
</script>

<template>
	<div class="main">
		<h1>Main content goes here</h1>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/scssVars.scss';

.main {
	max-height: calc(100vh - $headerHeight - $footerHeight - 2*$gap);
	display: grid;
	padding: 1rem;

	h1 {
		margin: 0;
	}
}
</style>
