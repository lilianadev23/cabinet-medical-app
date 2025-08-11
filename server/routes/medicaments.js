const express = require('express');
const {
  ajouterMedicament,
  getTousMedicaments,
  getMedicamentById,
  updateMedicament,
  deleteMedicament
} = require('../controllers/medicamentController');

const router = express.Router();

router.post('/', ajouterMedicament);
router.get('/', getTousMedicaments);
router.get('/:id', getMedicamentById);
router.put('/:id', updateMedicament);
router.delete('/:id', deleteMedicament);

module.exports = router;
