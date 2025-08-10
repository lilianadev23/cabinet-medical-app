
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SalleSchema = new Schema({
  nom: { type: String, required: true },       
  capacite: { type: Number, required: true },  
  statut: { type: String, default: "disponible" } 
}, { timestamps: true }); 

// Création du modèle
const Salle = mongoose.model('Salle', SalleSchema);

module.exports = Salle;
