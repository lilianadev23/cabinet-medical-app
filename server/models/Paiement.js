const mongoose = require('mongoose');
const { Schema } = mongoose;
const PaiementSchema = new Schema({
  montant: { type: Number, required: true },
  datePaiement: { type: Date, default: Date.now },
  consultation: { type: Schema.Types.ObjectId, ref: 'Consultation' },
  statut: { type: String, enum: ['effectué', 'en attente'], default: 'en attente' }
}, { timestamps: true });

module.exports = mongoose.model('Paiement', PaiementSchema);
