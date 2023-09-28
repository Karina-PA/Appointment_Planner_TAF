function generateRandomEmail() {
  const time = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  const email = `user${time}${randomNumber}@example.com`;
  return email;
}

const user = {
  username: 'user777',
  password: 'qaz123Wsx',
  email: generateRandomEmail(),
};

const userData = {
  id: 4,
  username: 'Laura',
  firstName: 'Laura',
  lastName: 'Dou',
  email: 'laura@gmail.com',
  password: 'LauraString',
  phone: '999777444',
  userStatus: 1,
};

module.exports = {
  user,
  userData,
};
