const mongoose = require('mongoose');
const { Schema } = mongoose;

const BaseUserSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true }, 
  email: { type: String, unique: true, required: true },
  motdepasse: { type: String, required: true },
  statut: { type: String, default: "actif" },
  permission: { type: String }, 
  role: { type: String, required: true } 
}, { discriminatorKey: 'role', timestamps: true });


const User = mongoose.model('User', BaseUserSchema);

const AdminFields = new Schema({ 
  permissions: [String] },
   { _id: false });



const MedecinFields = new Schema({
   dateDebut: Date,
   specialite: String, 
   telephone: Number,
   adresse: String,
   cabinet: String,
   patients: [String] }, 
   { _id: false });


const SecretaireFields = new Schema({ 
  telephone: Number,
  dateEmbauche: Date,
  dateNaissance: Date,
  niveauEtude: String,
  numCompteBancaire: String,
  numCnss: String,
  cin: String,
  bureau: String },
   { _id: false });

const Admin = User.discriminator('admin', AdminFields);
const Medecin = User.discriminator('medecin', MedecinFields);
const Secretaire = User.discriminator('secretaire', SecretaireFields);

const MedecinAdmin = User.discriminator('medecin_admin', new Schema({
  ...MedecinFields.obj,
  ...AdminFields.obj,
}, { _id: false }));

module.exports = { User, Admin, Medecin, Secretaire, MedecinAdmin };
