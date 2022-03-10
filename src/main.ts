import './assets/styles/main.scss'

import { createApp, computed, InjectionKey } from 'vue'
import App from './App.vue'
import { store, StoreKey } from './store'
import router from './router'
import { labels, LabelsKey } from './lib/labels'

const app = createApp(App)
app.use(store, StoreKey)
app.use(router)
app.provide(LabelsKey, computed(() => labels[store.state.lang]))

app.mount('#app')
