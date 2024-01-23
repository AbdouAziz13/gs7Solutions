const express = require("express");
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");
const router = express.Router();

// registration route
router.post("/registration", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username: username });
  if (user) {
    return res.json({ error: "L'utilisateur existe déjà." });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = new userModel({
    username: username,
    password: hashPassword,
  });
  await newUser.save();

  return res.json({ message: "Utilisateur créé avec succès." });
});
// ----------------------

// login route
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await userModel.findOne({ username: username });
  if (!user) {
    return res.json({ error: "Utilisateur introuvable. Veuillez réessayer." });
  }
  // check if the passwords match
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ error: " Mot de passe incorrect.", Login: false });
  } else {
    req.session.username = user.username;
    return res.json({ Login: true });
  }
});

// get sesion
router.get("/", (req, res) => {
  if (req.session.username) {
    return res.json({ valid: true, username: req.session.username });
  } else {
    return res.json({ valid: false });
  }
});

// logout route
router.post("/logout", (req, res) => {
  if (req.session.username) {
    // Si l'utilisateur est connecté, détruire la session
    req.session.destroy((err) => {
      if (err) {
        return res.json({ error: "Erreur lors de la déconnexion." });
      }
      return res.json({ message: "Déconnexion réussie." });
    });
  } else {
    // Si l'utilisateur n'est pas connecté, renvoyer un message approprié
    return res.json({ message: "Aucune session active." });
  }
});

module.exports = router;

// error
