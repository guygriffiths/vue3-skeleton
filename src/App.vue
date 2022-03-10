<script setup lang="ts">
import { computed, onMounted, inject } from 'vue'
import { useStore } from 'vuex'
import { StoreKey } from './store'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'
import Loading from 'vue3-loading-overlay'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/Footer.vue'
import { labels, LabelsKey } from './lib/labels'

const l = inject(LabelsKey, computed(() => labels.en))

const store = useStore(StoreKey)

const isLoading = computed(() => store.getters.isLoading)

onMounted(() => {
	document.title = l.value.title
})
</script>

<template>
	<loading :active="isLoading" :isFullPage="true" id="loading"></loading>
	<AppHeader id="header" />
	<router-view id="main"></router-view>
	<AppFooter id="footer" />
</template>

<style lang="scss">
@import '@/assets/styles/main.scss';
@import '@/assets/styles/scssVars.scss';

#app {
	width: 100vw;
	height: 100vh;
	max-width: 100vw;
	max-height: 100vh;
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: $headerHeight+$gap 1fr $footerHeight+$gap;
	grid-template-areas: 'header' 'main' 'footer';

	#loading {
		width: 100vw;
		height: 100vh;
		position: absolute;
		margin: auto;
	}

	#header {
		grid-area: header;
	}

	#main {
		grid-area: main;
	}

	#footer {
		grid-area: footer;
	}
}
</style>
