const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  email: String,
  genre: Boolean,
  motDePasse: String,
  verificationMotDePasse: String,
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);
