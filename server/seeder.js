require('dotenv').config();
const mongoose = require('mongoose');
const { Admin, Medecin, Secretaire, MedecinAdmin } = require('./models/users');

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/cabinet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connecté à MongoDB'))
  .catch(err => console.error('❌ Connexion échouée :', err));

// Données de test
const users = [
  new Admin({
    nom: 'Alice Admin',
    email: 'alice@cabinet.com',
    password: '123456',
    role: 'admin',
    permissions: ['gestion_utilisateur', 'planning']
  }),
  new Medecin({
    nom: 'Dr Jean',
    email: 'jean@cabinet.com',
    password: '123456',
    role: 'medecin',
    specialite: 'Cardiologie',
    patients: ['Pierre', 'Marie']
  }),
  new Secretaire({
    nom: 'Sophie Secretaire',
    email: 'sophie@cabinet.com',
    password: '123456',
    role: 'secretaire',
    bureau: 'A12'
  }),
  new MedecinAdmin({
    nom: 'Dr Mixte',
    email: 'mixte@cabinet.com',
    password: '123456',
    role: 'medecin_admin',
    specialite: 'Pédiatrie',
    patients: ['Luc', 'Emma'],
    permissions: ['dossiers', 'statistiques']
  })
];

// Fonction de seed
const seedDatabase = async () => {
  try {
    await mongoose.connection.dropCollection('users').catch(() => {});
    await Promise.all(users.map(user => user.save()));
    console.log('🌱 Base peuplée avec succès !');
  } catch (err) {
    console.error('❌ Erreur de peuplement :', err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
