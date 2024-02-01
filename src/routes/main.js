const express = require ('express');
const router = express.Router();
const mainController = require ('../controllers/mainController');

router.get('/', mainController.home);
router.get("/boda", mainController.boda);
router.get("/bautismo", mainController.bautismo);
router.get('/cumples', mainController.cumples);
router.get('/faq', mainController.faq);
router.get('/contacto', mainController.contact);



module.exports = router;