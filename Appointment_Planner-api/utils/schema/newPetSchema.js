const newPetDataSchema = {
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
        category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
            },
            name: {
              type: 'string',
            },
          },
        },
        name: {
          type: 'string',
        },
        photoUrls: {
          type: 'array',
        },
        tags: {
          type: 'array',
        },
        status: {
          type: 'string',
        },
      },
      required: ['id', 'category', 'name', 'photoUrls', 'tags', 'status'],
    },
  },
  required: ['status', 'data'],
};

module.exports = { newPetDataSchema };
