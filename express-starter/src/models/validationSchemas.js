module.exports = UserValidationSchema = {
    type: 'object',
    properties: {
        name: {
            type: 'string'
        },
        mail: {
            type: 'string'
        }
    },
    required: ['name', 'mail']
};