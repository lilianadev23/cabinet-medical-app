const mongoose = require('mongoose');
const { Schema } = mongoose;

const BaseUserSchema = new Schema({
  nom: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
}, { discriminatorKey: 'role', timestamps: true });

const User = mongoose.model('User', BaseUserSchema);

const AdminFields = new Schema({ permissions: [String] }, { _id: false });
const MedecinFields = new Schema({ specialite: String, patients: [String] }, { _id: false });
const SecretaireFields = new Schema({ bureau: String }, { _id: false });

const Admin = User.discriminator('admin', AdminFields);
const Medecin = User.discriminator('medecin', MedecinFields);
const Secretaire = User.discriminator('secretaire', SecretaireFields);

const MedecinAdmin = User.discriminator('medecin_admin', new Schema({
  ...MedecinFields.obj,
  ...AdminFields.obj,
}, { _id: false }));

module.exports = { User, Admin, Medecin, Secretaire, MedecinAdmin };
