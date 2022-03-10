import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { addDays, differenceInDays } from 'date-fns'
import { labels } from '../lib/labels'

export const StoreKey: InjectionKey<Store<State>> = Symbol()

const API_PATH =
	import.meta.env.PROD ? '/vue3-skeleton/data/' : '/data/'

const api = {
	DATA: API_PATH + 'data.json'
}

interface State {
	loadingCount: number
	lang: Language
}

const state: State = {
	loadingCount: 0,
	lang: 'en'
}

export const store = createStore<State>({
	state,
	mutations: {
		setLoading(state: State) {
			state.loadingCount++
		},
		setLoaded(state: State) {
			state.loadingCount--
		},
		setLanguage(state: State, payload: Language) {
			state.lang = payload
			document.title = labels[state.lang].title
		}
	},
	getters: {
		isLoading(state) {
			return state.loadingCount > 0
		}
	},
	actions: {
		async getData({ commit }) {
			commit('setLoading')
			// const rawData = await fetch(api.DATA)
			// const json: DataType = await rawData.json()
			// commit('setData', json)
			commit('setLoaded')
		}
	}
})
