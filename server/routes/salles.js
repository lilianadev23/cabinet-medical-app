const express = require('express');
const router = express.Router();
const {
  ajouterSalle,
  getToutesSalles,
  getSalleById,
  updateSalle,
  deleteSalle
} = require('../controllers/salleController');


router.post('/', ajouterSalle);
router.get('/', getToutesSalles);
router.get('/:id', getSalleById);
router.put('/:id', updateSalle);
router.delete('/:id', deleteSalle);

module.exports = router;
