require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const salleRoutes = require('./routes/salles');
const medicamentRoutes = require('./routes/medicaments');
const rendezVousRoutes = require('./routes/rendezVous');
const notificationRoutes = require('./routes/notification');
const consultationRoutes = require('./routes/consultation');
const ordonnanceRoutes = require('./routes/ordonnance');
const ligneOrdonnanceRoutes = require('./routes/ligneOrdonnance');
const paiementRoutes = require('./routes/paiement');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173', // React dev server
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connecté à MongoDB'))
.catch(err => {
  console.error(' Erreur MongoDB :', err.message);
  process.exit(1);
});

app.use('/api/users', userRoutes);
app.use('/api/salles', salleRoutes);
app.use('/api/medicaments', medicamentRoutes);
app.use('/api/rendezvous', rendezVousRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/ordonnances',ordonnanceRoutes);
app.use('/api/lignesordonnances',ligneOrdonnanceRoutes);
app.use('/api/paiements', paiementRoutes);


app.listen(PORT, () => {
  console.log(` Serveur lancé sur le port ${PORT}`);
});
