const mongoose = require('mongoose');
const { Schema } = mongoose;

const BaseUserSchema = new Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true }, 
  email: { type: String, unique: true, required: true },
  telephone: { type: String, required: true },
  adresse: { type: String, required: true },
  CIN: { type: String, required: true },
  dateNaissance: { type: Date, required: true },
  sexe: { type: String, required: true },
  motdepasse: { type: String, required: true },
  statut: { type: String, default: "actif" },
  role: { type: String, required: true } 
}, { discriminatorKey: 'role', timestamps: true });


const User = mongoose.model('User', BaseUserSchema);
 
const AdminFields = new Schema({ 
  permissions: [String] },
   { _id: false });



const MedecinFields = new Schema({
   dateDebut: Date,
   specialite: String,  
   cabinet: String,
   patients: [String] }, 
   { _id: false });


const SecretaireFields = new Schema({   
  dateEmbauche: Date,  
  niveauEtude: String,
  numCompteBancaire: String,
  numCnss: String,
  TypeDeContrat: String,  
  salaire:Number,
   },
   { _id: false });

  const PatientFields = new Schema({ 
  NumeroDeDossier: String, 
  mutuelle: String, 
  NumeroDeSecuriteSociale: Number,
  Profession:String,
  LieuDeNaissance:String,
  GroupeSanguin:String,
  MedecinTraitant:String,
  AllergiesConnues: [String],
  PathologiesChroniques: [String], 
   },
   { _id: false });

const Admin = User.discriminator('admin', AdminFields);
const Medecin = User.discriminator('medecin', MedecinFields);
const Secretaire = User.discriminator('secretaire', SecretaireFields);
const Patient = User.discriminator('patient', PatientFields);

const MedecinAdmin = User.discriminator('medecin_admin', new Schema({
  ...MedecinFields.obj,
  ...AdminFields.obj,
}, { _id: false }));

module.exports = { User, Admin, Medecin, Secretaire, MedecinAdmin, Patient };
