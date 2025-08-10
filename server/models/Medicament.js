const mongoose = require('mongoose');
const { Schema } = mongoose;

const MedicamentSchema = new Schema({
  codecip: { type: String, required: true, unique: true },
  nomcommercial: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Medicament', MedicamentSchema);
