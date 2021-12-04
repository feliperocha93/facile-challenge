const crypto = require('crypto');

const ALGORITHM = 'aes-192-cbc';
const PASSWD = 'D*BDynh;654>2Rgf';
const IV = Buffer.alloc(16, 0);

const KEY = crypto.scryptSync(PASSWD, 'salt', 24);

class CryptoService {
  encrypt(string) {
    const cipher = crypto.createCipheriv(ALGORITHM, KEY, IV);
    let encrypted = cipher.update(string.toString(), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  decrypt(encryptedString) {
    const decipher = crypto.createDecipheriv(ALGORITHM, KEY, IV);
    let decrypted = decipher.update(encryptedString, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }
}

module.exports = new CryptoService();
