const EncryptRepository = require('../repositories/EncryptRepository');
const CryptoService = require('../services/CryptoService');

class EncryptController {
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({
        code: 'E_VALIDATION_FAILURE',
        message: 'O campo "name" é obrigatório.',
      });
    }

    const encryptedName = CryptoService.encrypt(name);

    const result = await EncryptRepository.create(encryptedName);

    return response.status(201).json(result);
  }

  async show(request, response) {
    const { id } = request.params;

    const result = await EncryptRepository.findNameById(id);

    if (!result) {
      return response.status(404).json({
        code: 'E_NOT_FOUND',
        message: 'Nome não encontrado.',
      });
    }

    const name = CryptoService.decrypt(result.encrypted_name);

    return response.json({ id: result.id, name });
  }
}

module.exports = new EncryptController();
