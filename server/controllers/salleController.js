const Salle = require('../models/Salle');
const ajouterSalle = async (req, res) => {
  try {
    const salle = new Salle({
      nom: req.body.nom,
      capacite: req.body.capacite,
      statut: req.body.statut || "disponible"
    });

    await salle.save();
    res.status(201).json({ message: "Salle ajoutée avec succès", salle });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const getToutesSalles = async (req, res) => {
  try {
    const salles = await Salle.find();
    res.json(salles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getSalleById = async (req, res) => {
  try {
    const salle = await Salle.findById(req.params.id);
    if (!salle) return res.status(404).json({ message: "Salle non trouvée" });
    res.json(salle);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateSalle = async (req, res) => {
  try {
    const salle = await Salle.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!salle) return res.status(404).json({ message: "Salle non trouvée" });
    res.json({ message: "Salle mise à jour", salle });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


const deleteSalle = async (req, res) => {
  try {
    const salle = await Salle.findByIdAndDelete(req.params.id);
    if (!salle) return res.status(404).json({ message: "Salle non trouvée" });
    res.json({ message: "Salle supprimée" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  ajouterSalle,
  getToutesSalles,
  getSalleById,
  updateSalle,
  deleteSalle
};