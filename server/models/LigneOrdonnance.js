const mongoose = require('mongoose');
const { Schema } = mongoose;
const LigneOrdonnanceSchema = new Schema({
  medicament: { type: Schema.Types.ObjectId, ref: 'Medicament', required: true },
  posologie: { type: String, required: true },
  duree: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('LigneOrdonnance', LigneOrdonnanceSchema);
