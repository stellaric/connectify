const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Pour le hachage du mot de passe
const session = require('express-session'); // Pour gérer les sessions

const app = express();
const port = process.env.PORT || 3001;

// Middleware pour analyser les données JSON du corps des requêtes
app.use(bodyParser.json());

// Middleware pour gérer les sessions (à configurer selon vos besoins)
app.use(session({
  secret: 'votre_secret_key',
  resave: false,
  saveUninitialized: true,
}));

// Connexion à la base de données MongoDB
mongoose.connect('mongodb+srv://test:azerty@dbconnectify.odiosgv.mongodb.net/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importer le modèle utilisateur
const User = require('./database/models/user');

// Route pour gérer l'inscription d'un utilisateur
app.post('/inscription', async (req, res) => {
  try {
    const { nom, prenom, email, genre, mot_de_passe, verification_mot_de_passe } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const utilisateurExistant = await User.findOne({ email });

    if (utilisateurExistant) {
      return res.status(400).json({ erreur: 'Cet email est déjà utilisé' });
    }

    // Vérifiez si les mots de passe correspondent
    if (mot_de_passe !== verification_mot_de_passe) {
      return res.status(400).json({ erreur: 'Les mots de passe ne correspondent pas' });
    }

    // Hachez le mot de passe avant de l'enregistrer dans la base de données
    const motDePasseHache = await bcrypt.hash(mot_de_passe, 10);

    // Créez une instance de l'utilisateur avec les données du formulaire
    const nouvelUtilisateur = new User({
      nom,
      prenom,
      email,
      genre,
      mot_de_passe: motDePasseHache, // Enregistrez le mot de passe haché
    });

    // Enregistrez l'utilisateur dans la base de données
    await nouvelUtilisateur.save();

    // Répondez au client avec une confirmation
    res.json({ message: 'Inscription réussie' });
  } catch (erreur) {
    // Gérez les erreurs ici, par exemple, en renvoyant un message d'erreur
    res.status(500).json({ erreur: 'Erreur lors de l\'inscription' });
  }
});

// Route pour gérer la connexion d'un utilisateur
app.post('/connexion', async (req, res) => {
  try {
    const { email, mot_de_passe } = req.body;

    // Recherchez l'utilisateur par son adresse email
    const utilisateur = await User.findOne({ email });

    if (!utilisateur) {
      return res.status(401).json({ erreur: 'Identifiants incorrects' });
    }

    // Vérifiez si le mot de passe correspond
    const motDePasseValide = await bcrypt.compare(mot_de_passe, utilisateur.mot_de_passe);

    if (!motDePasseValide) {
      return res.status(401).json({ erreur: 'Identifiants incorrects' });
    }

    // L'utilisateur est authentifié avec succès
    req.session.utilisateur = utilisateur; // Stockez l'utilisateur dans la session
    res.json({ message: 'Connexion réussie' });
  } catch (erreur) {
    res.status(500).json({ erreur: 'Erreur lors de la connexion' });
  }
});

// Route pour gérer la déconnexion de l'utilisateur
app.post('/deconnexion', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ erreur: 'Erreur lors de la déconnexion' });
    }
    res.json({ message: 'Déconnexion réussie' });
  });
});

// Écoutez les demandes entrantes sur le port spécifié
app.listen(port, () => {
  console.log(`Serveur écoutant sur le port ${port}`);
});
