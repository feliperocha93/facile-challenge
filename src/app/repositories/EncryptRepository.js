const db = require('../../database');

class EncryptRepository {
  async create(encryptedName) {
    const [rows] = await db.query(`
      INSERT INTO names(encrypted_name)
      VALUES($1)
      RETURNING *
    `, [encryptedName]);

    return rows;
  }
}

module.exports = new EncryptRepository();
