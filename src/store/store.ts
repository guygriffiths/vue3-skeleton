import { defineStore } from 'pinia'


interface State {
	value: string
	lang: Language
}


export const useStore = defineStore('main', {
	state: (): State => {
		return {
			value: 'Starting value of store variable',
			lang: 'en'
		}
	},
	actions: {
		/* You can define actions here and just call then like normal methods */
	}
})
