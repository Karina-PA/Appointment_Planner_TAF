const apiResponseSchema = {
  type: 'object',
  properties: {
    status: {
      type: 'integer',
    },
    data: {
      type: 'object',
      properties: {
        code: {
          type: 'integer',
        },
        type: {
          type: 'string',
        },
        message: {
          type: 'string',
        },
      },
      required: ['code', 'type', 'message'],
    },
  },
  required: ['status', 'data'],
};

module.exports = { apiResponseSchema };
