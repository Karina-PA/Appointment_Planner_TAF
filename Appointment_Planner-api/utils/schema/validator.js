const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

function validateSchema(schema, data) {
  const validate = ajv.compile(schema);
  const valid = validate(data);
  let message = '';
  if (valid) {
    return (message = 'valid schema!');
  } else {
    return (message = 'invalid schema: ' + ajv.errorsText(validate.errors) + '!');
  }
}

module.exports = { validateSchema };
