const EncryptRepository = require('../repositories/EncryptRepository');
const CryptoService = require('../services/CryptoService');

class EncryptController {
  async store(request, response) {
    const { name } = request.body;

    const encryptedName = CryptoService.encrypt(name);

    const result = await EncryptRepository.create(encryptedName);

    response.status(201).json(result);
  }

  async show(request, response) {
    const { id } = request.params;

    const result = await EncryptRepository.findNameById(id);

    const name = CryptoService.decrypt(result.encrypted_name);

    response.json({ id: result.id, name });
  }
}

module.exports = new EncryptController();
