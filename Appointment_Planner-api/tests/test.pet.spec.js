const { handleHTTP } = require('../utils/handle_http');
const expect = require('chai').expect;
const { petData_post, petData_update, petData_nonExisting } = require('../utils/petData');
const { validateSchema } = require('../utils/schema/validator');
const { user } = require('../utils/userData');
const log4js = require('../configs/log4jsconfig');
const logger = log4js.getLogger();
const { newPetDataSchema } = require('../utils/schema/newPetSchema');
const { apiResponseSchema } = require('../utils/schema/apiResponseSchema');

describe('Testing PET endpoint', () => {
  it('Should be possible add new pet with valid data', async () => {
    const response = await handleHTTP('POST', '/pet', petData_post);
    const validatorMessage = validateSchema(newPetDataSchema, response);
    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.equal(petData_post.id);
    expect(response.data.name).to.be.equal(petData_post.name);
    expect(response.data.status).to.be.equal(petData_post.status);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`PET/POST/positive - JSON response has ${validatorMessage}`);
    logger.info(`Passed test for: PET/POST/positive. Result: Added new pet with ID: ${response.data.id}`);
  });

  it("Should be possible to get new pet's info", async () => {
    const response = await handleHTTP('GET', `/pet/${petData_post.id}`);
    const validatorMessage = validateSchema(newPetDataSchema, response);
    expect(response.status).to.be.equal(200);
    expect(response.data.id).to.be.equal(petData_post.id);
    expect(response.data.name).to.be.equal(petData_post.name);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`PET/GET/positive - JSON response has ${validatorMessage}`);
    logger.info(`Passed test for: PET/GET/positive. Result: Fetched new added pet's data: ${response.data.id}, ${response.data.name}`);
  });

  it("Should be possible to update new pet's info with valid data", async () => {
    const response = await handleHTTP('PUT', '/pet', petData_update);
    const validatorMessage = validateSchema(newPetDataSchema, response);
    expect(response.status).to.be.equal(200);
    expect(response.data.status).to.be.equal(petData_update.status);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`PET/PUT/positive - JSON response has ${validatorMessage}`);
    logger.info(`Passed test for: PET/PUT/positive. Result: Info for pet with ID ${response.data.id} was updated`);
  });

  it("Should be possible to delete new pet's info", async () => {
    const response = await handleHTTP('POST', '/user/createWithArray', [user]);
    const validatorMessage = validateSchema(apiResponseSchema, response);
    const response1 = await handleHTTP('GET', '/user/login', {
      username: user.username,
      password: user.password,
    });
    var apiKey = response1.data.message.split(':')[1];
    const delete_response = await handleHTTP('DELETE', `/pet/${petData_update.id}`, apiKey);
    expect(delete_response.status).to.be.equal(200);
    expect(delete_response.data.message).to.be.equal(`${petData_update.id}`);
    expect(validatorMessage).to.be.equal('valid schema!');
    logger.info(`PET/DELETE/positive - JSON response has ${validatorMessage}`);
    logger.info(`Passed test for: PET/DELETE/positive. Result: Info for pet with ID ${delete_response.data.message} was deleted`);
  });

  it('Should return "Pet not found" message in response data when trying to get deleted pet\'s info', async () => {
    handleHTTP('GET', `/pet/${petData_update.id}`)
      .then(function (response) {
        logger.error(`Unexpected response: ${response}`);
        expect.fail(`Expected a 404 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.equal(404);
        expect(error.response.data.message).to.equal('Pet not found');
        logger.info(`Test for: PET/GET/negative in process. Expected response message: ${error.response.data.message}`);
      })
      .finally(function () {
        logger.info(
          `Finished test for: PET/GET/negative. Result:"Pet not found" message is recieved when trying to get deleted pet\'s info`,
        );
      });
  });

  it('Should return error when trying add pet without required data', async () => {
    handleHTTP('POST', `/pet`)
      .then(function (response) {
        logger.error(`Test for: PET/POST/negative in process. 
        Unexpected response: ${response}`);
        expect.fail(`Expected a 415 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.equal(415);
        expect(error.response.statusText).to.equal('Unsupported Media Type');
        expect(error.response.data).to.have.property('type', 'unknown');
        logger.info(`Test for: PET/POST/negative in process. Expected response statusText: ${error.response.statusText}`);
      })
      .finally(function () {
        logger.info(`Finished test for: PET/POST/negative. Result: returns error when trying add pet without required data`);
      });
  });

  it("Should return error when trying to update non-existing pet's info", async () => {
    handleHTTP('PUT', `/pet/${petData_update.id}`)
      .then(function (response) {
        logger.error(`Unexpected response: ${response}`);
        expect.fail(`Expected a 404 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.equal(404);
        expect(error.response.data.message).to.equal('not found');
        logger.info(`Test for: PET/PUT/negative in process. Expected response: ${error.response.data.message}`);
      })
      .finally(function () {
        logger.info(`Finished test for: PET/PUT/negative. Result: returns error when trying to update non-existing pet's info`);
      });
  });

  it(`Should return error when trying to delete non-existing pet's info`, async () => {
    handleHTTP('DELETE', `/pet/${petData_update.id}`)
      .then(function (response) {
        logger.error(`Unexpected response: ${response}`);
        expect.fail(`Expected a 404 status code, but got ${response.status}`);
      })
      .catch(function (error) {
        expect(error.response.status).to.equal(404);
        logger.info(`Test for:PET/DELETE/negative in process. Expected response: ${error.response.statusText}`);
      })
      .finally(function () {
        logger.info(`Finished test for: PET/DELETE/negative. Result: returns error when trying to delete non-existing pet's info`);
      });
  });
});
