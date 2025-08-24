const mongoose = require('mongoose');
const { Schema } = mongoose;
const OrdonnanceSchema = new Schema({
  consultation: { type: Schema.Types.ObjectId, ref: 'Consultation' },
  lignes: [{ type: Schema.Types.ObjectId, ref: 'LigneOrdonnance' }]
}, { timestamps: true });

module.exports = mongoose.model('Ordonnance', OrdonnanceSchema);
