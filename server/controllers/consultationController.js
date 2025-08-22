const Consultation = require('../models/Consultation');

exports.create = async (req, res) => {
  try {
    const data = await Consultation.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await Consultation.find().populate('patient medecin rendezVous ordonnance');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await Consultation.findById(req.params.id).populate('patient medecin rendezVous ordonnance');
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: 'Non trouvé' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Consultation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await Consultation.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
