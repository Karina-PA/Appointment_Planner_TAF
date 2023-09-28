const petDataSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'integer',
    },
    data: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
        },
        petId: {
          type: 'integer',
        },
        quantity: {
          type: 'integer',
        },
        shipDate: {
          type: 'string',
        },
        status: {
          type: 'string',
        },
        complete: {
          type: 'boolean',
        },
      },
      required: ['id', 'petId', 'quantity', 'shipDate', 'status', 'complete'],
    },
  },
  required: ['status', 'data'],
};

module.exports = { petDataSchema };
