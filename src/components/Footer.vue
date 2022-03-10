<script setup lang="ts">
import { inject, computed } from 'vue'
import { labels, LabelsKey } from '../lib/labels'
import { store } from '../store'

const l = inject(
	LabelsKey,
	computed(() => labels.en)
)

const lang = computed({
	get() {
		return store.state.lang
	},
	set(value: Language) {
		store.commit('setLanguage', value)
	},
})
</script>

<template>
	<div class="footer">
		<div class="lang-select">
			<label><input type="radio" v-model="lang" value="en" />English</label>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/scssVars.scss';

.footer {
	padding-top: $gap;
	height: $footerHeight + $gap;
	background-color: $bgContrast;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.75rem;

	.lang-select {
		margin: 0.5rem;
		align-self: center;
		display: flex;

		label {
			margin: 0 1rem;
			font-size: 1rem;
		}
	}
}
</style>
