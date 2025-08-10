const Medicament = require('../models/Medicament');


const ajouterMedicament = async (req, res) => {
  try {
    const medicament = await Medicament.create({
      codecip: req.body.codecip,
      nomcommercial: req.body.nomcommercial
    });
    res.status(201).json({ message: "Médicament ajouté", medicament });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const getTousMedicaments = async (req, res) => {
  try {
    const medicaments = await Medicament.find();
    res.json(medicaments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getMedicamentById = async (req, res) => {
  try {
    const medicament = await Medicament.findById(req.params.id);
    if (!medicament) return res.status(404).json({ message: "Médicament non trouvé" });
    res.json(medicament);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateMedicament = async (req, res) => {
  try {
    const medicament = await Medicament.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!medicament) return res.status(404).json({ message: "Médicament non trouvé" });
    res.json({ message: "Médicament mis à jour", medicament });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const deleteMedicament = async (req, res) => {
  try {
    const medicament = await Medicament.findByIdAndDelete(req.params.id);
    if (!medicament) return res.status(404).json({ message: "Médicament non trouvé" });
    res.json({ message: "Médicament supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  ajouterMedicament,
  getTousMedicaments,
  getMedicamentById,
  updateMedicament,
  deleteMedicament
};
