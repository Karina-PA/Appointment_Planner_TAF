const axios = require('axios');

const handleHTTP = async (method, url, data = null) => {
  const response = await axios({
    method,
    url: `https://petstore.swagger.io/v2${url}`,
    data,
  });
  return {
    status: response.status,
    data: response.data,
  };
};

module.exports = {
  handleHTTP,
};
