const EncryptRepository = require('../repositories/EncryptRepository');

class EncryptController {
  async store(request, response) {
    const { name } = request.body;

    const result = await EncryptRepository.create(name);

    response.status(201).json(result);
  }
}

module.exports = new EncryptController();
