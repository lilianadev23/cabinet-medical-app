// models/Consultation.js
const ConsultationSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  medecin: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  rendezVous: { type: Schema.Types.ObjectId, ref: 'RendezVous' },
  diagnostic: { type: String },
  ordonnance: { type: Schema.Types.ObjectId, ref: 'Ordonnance' }
}, { timestamps: true });

module.exports = mongoose.model('Consultation', ConsultationSchema);
