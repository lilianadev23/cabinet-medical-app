const {
  User,
  Medecin,
  Secretaire,
  MedecinAdmin,
  Patient,
} = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const {
      role,
      nom,
      prenom,
      email,
      telephone,
      adresse,
      CIN,
      dateNaissance,
      sexe,
      motdepasse,
      ...rest
    } = req.body;
    
   
    const roleNormalized = typeof role === 'string' ? role.trim().toLowerCase() : '';
    console.log('Role reçu:', `"${role}"`);
    console.log('Role normalisé:', `"${roleNormalized}"`);
    let user;
    switch (roleNormalized) {
      case "patient":
        user = new Patient({
          role:roleNormalized,
          nom,
          prenom,
          email,
          telephone,
          adresse,
          CIN,
          dateNaissance,
          sexe,
          motdepasse,
          ...rest,
        });
        break;
      case "medecin":
        user = new Medecin({
          role,
          nom,
          prenom,
          email,
          telephone,
          adresse,
          CIN,
          dateNaissance,
          sexe,
          motdepasse,
          ...rest,
        });
        break;
      case "secretaire":
        user = new Secretaire({
          role,
          nom,
          prenom,
          email,
          telephone,
          adresse,
          CIN,
          dateNaissance,
          sexe,
          motdepasse,
          ...rest,
        });
        break;
      case "medecin_admin":
        user = new MedecinAdmin({
          role,
          nom,
          prenom,
          email,
          telephone,
          adresse,
          CIN,
          dateNaissance,
          sexe,
          motdepasse,
          ...rest,
        });
        break;
      default:
        return res.status(400).json({ message: "Rôle invalide" });
    }

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).exec();
    if (!user)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    Object.assign(user, req.body);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id).exec();
    if (!user)
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    res.json({ message: "Utilisateur supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
