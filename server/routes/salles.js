const express = require('express');
const router = express.Router();
const {
  ajouterSalle,
  getToutesSalles,
  getSalleById,
  updateSalle,
  deleteSalle
} = require('../controllers/salleController');


router.post('/salles', ajouterSalle);
router.get('/salles', getToutesSalles);
router.get('/salles/:id', getSalleById);
router.put('/salles/:id', updateSalle);
router.delete('/salles/:id', deleteSalle);

module.exports = router;
