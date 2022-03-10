import { TimeLocaleDefinition } from 'd3'
import { InjectionKey, ComputedRef } from 'vue'

const labelsEn = {
	title: 'Application title',
	main: 'Main page'
}

const labels = {
	en: labelsEn
}

const LabelsKey: InjectionKey<ComputedRef<typeof labelsEn>> = Symbol('labels')

const enLocale: TimeLocaleDefinition = {
	dateTime: '%a %e %b %X %Y',
	date: '%d/%m/%Y',
	time: '%H:%M:%S',
	periods: ['AM', 'PM'],
	days: [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	],
	shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	months: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	],
	shortMonths: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
}

const locales = {
	en: enLocale
}

export { labels, LabelsKey, locales }
