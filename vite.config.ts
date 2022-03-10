import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	base: command === 'build' ? '/vue3-skeleton/' : '/',
	plugins: [vue()],
	css: {
		preprocessorOptions: {
			scss: {},
		},
	},
}))
