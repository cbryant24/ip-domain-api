
export default {
	form: {
		data: { name: 'ipServicesForm', submit: 'ipServices' },
		style: {
      width: '20em',
			height: '50em',
			id: 'ip-services-form',
		},
	},
	inputs: [
		{
			data: {
				type: 'input',
				name: 'ip',
				label: 'ip or domain',
				placeholder: 'enter an ip or domain',
				required: true,
			},
			fieldStyle: {
        height: '5em',
        width: '100%'
      },
			inputStyle: {
        width: '100%'
      },
		},
		{
			data: {
				type: 'checkbox',
				name: 'services checkbox',
				label: 'ip services',
			},
			fieldStyle: {
        width: '20px',
        height: '20px'
      },
			inputStyle: {
        color: 'red'
      },
		},
	],
	buttons: [
		{
			text: 'Submit',
			type: 'submit',
			cb: null,
			style: { themeStyle: 'squareButton', mr: [3] },
			disabledStyle: { themeStyle: 'disabledSquareButton', mr: [3] },
		},
		{
			text: 'Cancel',
			type: 'cancel',
			cb: null,
			style: { themeStyle: 'squareButton' },
		},
	],
};