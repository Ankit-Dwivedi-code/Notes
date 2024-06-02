const express = require('express')
const router = express.Router();
const mainController = require('../controllers/mainController')


router.get('/', mainController.homepage);
router.get('https://notes-idi3.onrender.com/about', mainController.about);

module.exports = router;