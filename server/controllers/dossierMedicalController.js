const DossierMedical = require('../models/DossierMedical');

exports.create = async (req, res) => {
  try {
    const data = await DossierMedical.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await DossierMedical.find().populate('patient');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await DossierMedical.findById(req.params.id).populate('patient');
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: 'Non trouvé' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await DossierMedical.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await DossierMedical.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
