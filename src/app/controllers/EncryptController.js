const EncryptRepository = require('../repositories/EncryptRepository');

class EncryptController {
  async store(request, response) {
    const { name } = request.body;

    const result = await EncryptRepository.create(name);

    response.status(201).json(result);
  }

  async show(request, response) {
    const { id } = request.params;

    const result = await EncryptRepository.findNameById(id);

    response.json({ id: result.id, name: result.encrypted_name });
  }
}

module.exports = new EncryptController();
