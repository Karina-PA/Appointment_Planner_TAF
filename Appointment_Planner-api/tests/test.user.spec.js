const { handleHTTP } = require('../utils/handle_http');
const expect = require('chai').expect;
const { userData } = require('../utils/userData');
const { validateSchema } = require('../utils/schema/validator');
const { userDataSchema } = require('../utils/schema/userSchema');
const log4js = require('../configs/log4jsconfig');
const logger = log4js.getLogger();

describe('Testing USER endpoint', () => {
  it('It should be possible to update a user', async () => {
    const response = await handleHTTP('PUT', `/user/${userData.username}`, userData);
    const response1 = await handleHTTP('GET', `/user/${userData.username}`);
    const validatorMessage = validateSchema(userDataSchema, response1);
    expect(await response.status).to.be.equal(200);
    expect(await response1.status).to.be.equal(200);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`USER/PUT/positive: JSON response has ${validatorMessage}`);
    expect(await response1.data).to.have.property('username', userData.username);
    expect(await response1.data).to.have.property('lastName', userData.lastName);
    logger.info(`USER/PUT/positive: Info for user with name ${userData.username} was updated`);
  });

  it('There should be an error when update a non-existing user', async () => {
    handleHTTP('PUT', '/user/Paul')
      .then(function (response) {
        logger.error(`USER/PUT/negative - Unexpected response: ${response}`);
        expect.fail(`Expected a 415 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.be.equal(415);
      })
      .finally(function () {
        logger.info('USER/PUT/negative - Finished test: There should be an error when update a non-existing user');
      });
  });
});
