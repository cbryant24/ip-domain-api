export default {
	title: 'ipServices',
	description: 'Ip Services',
	inputs: [
		{
			name: 'ipServices',
			blur: 'emptyOrSafeString',
			change: 'emptyOrSafeString',
		},
	],
	inputErrorMessages: {
		ipServices: 'Should be in Ip or Domain format',
	},
	submit: [
		{
			name: 'ipServices',
			validate: 'emptyOrSafeString',
		}
	],
	submitErrorMessages: {
		ipServices: 'There was an error in the ip/domain field',
	},
};