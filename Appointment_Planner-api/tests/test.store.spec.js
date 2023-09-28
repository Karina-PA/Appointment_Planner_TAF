const { handleHTTP } = require('../utils/handle_http');
const expect = require('chai').expect;
const { pet } = require('../utils/storeData');
const { validateSchema } = require('../utils/schema/validator');
const { apiResponseSchema } = require('../utils/schema/apiResponseSchema');
const { petDataSchema } = require('../utils/schema/petSchema');
const log4js = require('../configs/log4jsconfig');
const logger = log4js.getLogger();

describe('Testing STORE endpoint', () => {
  it('It should be possible to create an order', async () => {
    const response = await handleHTTP('POST', '/store/order', pet);
    const validatorMessage = validateSchema(petDataSchema, response);
    expect(await response.status).to.be.equal(200);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`STORE/POST/positive - JSON response has ${validatorMessage}`);
    expect(await response.data).to.have.property('petId', pet.petId);
    logger.info(`STORE/POST/positive - Added new order with ID ${pet.id}`);
  });

  it('There should be an error when creating an order with invalid data type', async () => {
    handleHTTP('POST', '/store/order')
      .then(function (response) {
        logger.error(`STORE/POST/negative - Unexpected response: ${response}`);
        expect.fail(`Expected a 415 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.equal(415);
      })
      .finally(function () {
        logger.info('STORE/POST/negative - Finished test: There should be an error when creating an order with invalid data type');
      });
  });

  it('It should be possible to get purchase order by ID', async () => {
    const response = await handleHTTP('GET', `/store/order/${pet.id}`);
    const validatorMessage = validateSchema(petDataSchema, response);
    expect(await response.status).to.be.equal(200);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`STORE/GET/positive - JSON response has ${validatorMessage}`);
    expect(await response.data).to.have.property('petId', pet.petId);
    logger.info(`STORE/GET/positive - Fetched order data with ID ${pet.id}`);
  });

  it('There should be an error when getting purchase order by non-existing ID', async () => {
    handleHTTP('GET', '/store/order/500')
      .then(function (response) {
        logger.error(`STORE/GET/negative - Unexpected response: ${response}`);
        expect.fail(`Expected a 404 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.be.equal(404);
      })
      .finally(function () {
        logger.info('STORE/GET/negative - Finished test: There should be an error when getting purchase order by non-existing ID');
      });
  });

  it('It should be possible to delete an order by ID', async () => {
    const response = await handleHTTP('DELETE', `/store/order/${pet.id}`);
    const validatorMessage = validateSchema(apiResponseSchema, response);
    expect(await response.status).to.be.equal(200);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`STORE/DELETE/positive - JSON response has ${validatorMessage}`);
    logger.info(`STORE/DELETE/positive - Order with ID ${pet.id} was deleted`);
  });

  it('There should be an error when deleting an order by non-existing ID', async () => {
    handleHTTP('DELETE', '/store/order/444')
      .then(function (response) {
        logger.error(`STORE/DELETE/negative - Unexpected response: ${response}`);
        expect.fail(`Expected a 404 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.be.equal(404);
      })
      .finally(function () {
        logger.info('STORE/DELETE/negative - Finished test: There should be an error when deleting an order by non-existing ID');
      });
  });
});
