const RendezVous = require('../models/RendezVous');

exports.create = async (req, res) => {
  try {
    const data = await RendezVous.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const data = await RendezVous.find().populate('patient medecin salle');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await RendezVous.findById(req.params.id).populate('patient medecin salle');
    res.json(data);
  } catch (err) {
    res.status(404).json({ error: 'Non trouvé' });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await RendezVous.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await RendezVous.findByIdAndDelete(req.params.id);
    res.json({ message: 'Supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
