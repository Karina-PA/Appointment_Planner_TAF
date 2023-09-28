const petData_post = {
  id: 54321,
  category: {
    id: 2,
    name: 'horses',
  },
  name: 'pony',
  photoUrls: ['string'],
  tags: [
    {
      id: 0,
      name: 'test',
    },
  ],
  status: 'available',
};
const petData_update = {
  id: 54321,
  category: {
    id: 2,
    name: 'horses',
  },
  name: 'pony',
  photoUrls: ['string'],
  tags: [
    {
      id: 0,
      name: 'test',
    },
  ],
  status: 'pending',
};

const petData_nonExisting = {
  id: 45677778,
  category: {
    id: 1,
    name: 'dogs',
  },
  name: 'doggie',
  photoUrls: ['string'],
  tags: [
    {
      id: 0,
      name: 'test',
    },
  ],
  status: 'sold',
};
module.exports = {
  petData_post,
  petData_update,
  petData_nonExisting,
};
