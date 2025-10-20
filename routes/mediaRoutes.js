const express = require('express');
const mediaController = require('../controllers/mediaController');
const upload = require('../utils/multer');
const router = express.Router();

router.post('/upload', upload.single('media'), mediaController.uploadMedia);
router.get('/:filename', mediaController.getMedia);

module.exports = router;