const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');  // adapte selon ton projet

router.post('/login', async (req, res) => {
  const { email, motdepasse } = req.body;
  console.log('Login reçu:', email, motdepasse);

  try {
    const user = await User.findOne({ email });
    console.log('Utilisateur trouvé:', user);

    if (!user) {
      return res.status(400).json({ message: 'Email incorrect' });
    }

    // Utiliser bcrypt.compare au lieu de comparaison directe
    const isMatch = await bcrypt.compare(motdepasse, user.motdepasse);

    if (!isMatch) {
      return res.status(400).json({ message: 'Mot de passe incorrect' });
    }

    // Création du token JWT...
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET || 'default_secret',
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Connexion réussie',
      token,
      user: {
        _id: user._id,
        nom: user.nom,
        prenom: user.prenom,
        role: user.role,
        email: user.email,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
});


module.exports = router;
