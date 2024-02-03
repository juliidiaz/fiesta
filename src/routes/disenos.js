const express = require ('express');
const router = express.Router();
const disenosController = require ('../controllers/disenosController');

router.get('/boda-festivo', disenosController.bodaFestivo);

module.exports=router;

