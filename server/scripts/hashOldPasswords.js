const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { User } = require('../models/User'); // Adapte le chemin selon ton projet

const MONGO_URI = 'mongodb://localhost:27017/cabinet'; // 🔁 Modifie si besoin

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

(async () => {
  try {
    const users = await User.find();

    for (let user of users) {
      const pass = user.motdepasse;

      // Si le mot de passe n'est pas haché (en clair)
      if (!pass.startsWith('$2a$') && !pass.startsWith('$2b$')) {
        console.log(`⏳ Hachage du mot de passe pour : ${user.email}`);

        const hashed = await bcrypt.hash(pass, 10);
        user.motdepasse = hashed;
        await user.save();

        console.log(`✅ Mot de passe haché pour : ${user.email}`);
      } else {
        console.log(`✅ Déjà haché : ${user.email}`);
      }
    }

    console.log('✅ Tous les anciens mots de passe ont été vérifiés et sécurisés');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur lors du hashage :', err);
    process.exit(1);
  }
})();
