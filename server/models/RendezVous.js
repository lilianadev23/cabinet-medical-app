
const mongoose = require('mongoose');
const { Schema } = mongoose;

const RendezVousSchema = new Schema({
  dateRDV: { type: Date, required: true },
  heureRDV: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
  medecin: { type: Schema.Types.ObjectId, ref: 'User', required: true }, 
  salle: { type: Schema.Types.ObjectId, ref: 'Salle' },
  statut: { type: String, enum: ['planifié', 'annulé', 'terminé'], default: 'planifié' }
}, { timestamps: true });

module.exports = mongoose.model('RendezVous', RendezVousSchema);
