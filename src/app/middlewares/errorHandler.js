module.exports = (error, request, response) => {
  console.log('#### Error Handler');
  console.log(error);
  response.status(500).send();
};
