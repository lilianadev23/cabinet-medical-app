require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/users');
const salleRoutes = require('./routes/salles');
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
app.listen(PORT, () => {
  console.log(` Serveur lancé sur le port ${PORT}`);
});
