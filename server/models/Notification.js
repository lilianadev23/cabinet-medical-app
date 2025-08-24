const mongoose = require('mongoose');
const { Schema } = mongoose;
const NotificationSchema = new Schema({
  message: { type: String, required: true },
  typeNotification: { type: String },
  statut: { type: String, enum: ['envoyé', 'lu'], default: 'envoyé' },
  patient: { type: Schema.Types.ObjectId, ref: 'User' },
  rendezVous: { type: Schema.Types.ObjectId, ref: 'RendezVous' }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
