const optionsDefs = {
	string: {
		enableEnum: true,
		schema:  {
			properties: {
				type:     { type: 'string' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				hide:     { type: 'boolean' },
				pattern:  { type: 'string' },
				error:  { type: 'string' },
				disabled: { type: 'boolean' },
				defaultValue: { type: 'string' },
				required: { type: 'boolean' },
				factory: {
					type: 'string',
					enum: [
						'Radio'
					]
				},
				disableNullOption: { type: 'boolean' },
				nullOptionValue: { type: 'string' },
				nullOptionText: { type: 'string' },
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true },
				factory: {
					nullOption: {
						value: '',
						text: 'Default'
					},
					options: [
						{
							text: 'Radio',
							value: 'Radio'
						}
					]
				}
			}
		}
	},
	number: {
		schema:  {
			properties: {
				type:     { type: 'number' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				hide:     { type: 'boolean' },
				pattern:  { type: 'string' },
				error:  { type: 'string' },
				defaultValue: { type: 'string' },
				disabled: { type: 'boolean' },
				required: { type: 'boolean' },
				factory: {
					type: 'string',
					enum: [
						'Radio'
					]
				},
				disableNullOption: { type: 'boolean' },
				nullOptionValue: { type: 'string' },
				nullOptionText: { type: 'string' }
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true },
				factory: {
					nullOption: {
						value: '',
						text: 'Default'
					},
					options: [
						{
							text: 'Radio',
							value: 'Radio'
						}
					]
				}
			}
		}
	},
	boolean: {
		schema:  {
			properties: {
				type:     { type: 'string' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				hide:     { type: 'boolean' },
				pattern:  { type: 'string' },
				error:  { type: 'string' },
				defaultValue: { type: 'boolean' },
				disabled: { type: 'boolean' },
				required: { type: 'boolean' }
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true }
			}
		}
	},
	object: {
		schema:  {
			properties: {
				type:     { type: 'string' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				help:    { type: 'string' },
				error:  { type: 'string' },
				legend:    { type: 'string' },
				hide:     { type: 'boolean' },
				disabled: { type: 'boolean' }
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true }
			}
		}
	},
	root: {
		schema:  {
			properties: {
				type:     { type: 'string' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				help:    { type: 'string' },
				formType: {
					type: 'string',
					enum: [
						'inspections-form'
					]
				},
				restrictedClients: {
					type: 'string',
					enum: [
						'web',
						'inspections-app'
					]
				},
				disabled: { type: 'boolean' },
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true },
				name: { disabled: true },
				formType: {
					nullOption: {
						value: '',
						text: 'Normal form'
					},
					options: [
						{
							text: 'Inspections Form',
							value: 'inspections-form'
						}
					]
				},
				restrictedClients: {
					nullOption: {
						value: '',
						text: 'No restriction'
					},
					options: [
						{
							text: 'Web',
							value: 'web'
						}, {
							text: 'Inspections App',
							value: 'inspections-app'
						}
					]
				}
			}
		}
	},
	array: {
		schema:  {
			properties: {
				type:     { type: 'string' },
				name:     { type: 'string' },
				label:    { type: 'string' },
				help:    { type: 'string' },
				legend:    { type: 'string' },
				error:  { type: 'string' },
				hide:     { type: 'boolean' },
				disabled: { type: 'boolean' },
				disableAdd: { type: 'boolean' },
				disableRemove: { type: 'boolean' },
				disableOrder: { type: 'boolean' }
			},
			type: 'object'
		},
		options: {
			fields: {
				type: { disabled: true }
			}
		}
	},
	crossReference: {
		disableNullOption: 'disableNullOption',
		formType: 'options.xFormType',
		restrictedClients: 'options.xRestrictedClients',
		factory: 'options.factory',
		error: 'options.error',
		nullOptionValue: 'options.nullOption.value',
		nullOptionText: 'options.nullOption.text',
		type: 'schema.type',
		pattern: 'schema.pattern',
		help: 'options.help',
		legend: 'options.legend',
		label: 'options.label',
		disabled: 'options.disabled',
		defaultValue: 'value',
		required: 'required',
		disableAdd: 'options.disableAdd',
		disableRemove: 'options.disableRemove',
		disableOrder: 'options.disableOrder'
	}
};

export default optionsDefs;
