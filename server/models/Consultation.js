const mongoose = require('mongoose');
const { Schema } = mongoose;
const ConsultationSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  medecin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  diagnostic: { type: String },
  ordonnance: { type: Schema.Types.ObjectId, ref: 'Ordonnance' }
}, { timestamps: true });

module.exports = mongoose.model('Consultation', ConsultationSchema);
