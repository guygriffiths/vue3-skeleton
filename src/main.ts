import Cookies from 'js-cookie'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main.scss'
import { createI18n } from './lib/labels'
import router from './router'
import { useStore } from './store/main'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

const cookieName = import.meta.env.X_KEYCLOAK_LOGIN_COOKIE_NAME
function createCookie(token: string) {
	// Create our cookie with token from keycloak object
	Cookies.set(cookieName, token, {
		domain: import.meta.env.X_KEYCLOAK_LOGIN_COOKIE_DOMAIN,
		path: '/',
		expires: 1,
		secure: cookieName.startsWith('__Secure-'),
	})
}


const store = useStore()
// TODO use language store here (if required)
const i18n = createI18n(() => store.lang)
app.use(i18n)

app.mount('#app')
