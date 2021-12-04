const { Router } = require('express');

const EncryptController = require('./app/controllers/EncryptController');

const router = Router();

router.post('/encrypt', EncryptController.store);
router.get('/encrypt/:id', EncryptController.show);

module.exports = router;
