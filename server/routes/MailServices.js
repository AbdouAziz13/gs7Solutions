require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const NewsLetterModel = require("../models/NewsLetter");
const Router = express.Router();


// newsLetter Router
Router.post("/newsLetter", async (req, res) => {
  const { newsLetterEmail } = req.body;

  try {
    // Utilisez la méthode create qui prend en charge la validation de l'unicité
    const newsLetter = await NewsLetterModel.create({
      newsLetterEmail: newsLetterEmail,
    });

    res.json(newsLetter);
  } catch (error) {
    if (error.code === 11000) {
      // Si le code d'erreur est 11000, c'est une violation de l'unicité
      res.status(400).json({ error: "Cette adresse e-mail est déjà inscrite à la newsletter." });
    } else {
      // Autre erreur
      console.error("Erreur lors de l'ajout à la newsletter:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

// bsic
Router.get("/newsletter", async (req, res) => {
  const allUser = await NewsLetterModel.find({});
  res.json(allUser);
});

// email envoyer lors de la validation d'une commande
Router.post("/validationMail", async (req, res) => {
  try {
    const { email, objet, message } = req.body;

    // Configuration du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Options pour l'e-mail de confirmation
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: "azizprofess@outlook.fr",
      subject: "Message venant de votre site web",
      text: `Bonjour,\n\n Vous avez reçu un nouveau message de  , ${email}`,
    };

    // Options pour l'e-mail de la commande
    const orderMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: objet,
      text: message,
    };

    // Envoi de l'e-mail de confirmation
    const confirmationInfo = await transporter.sendMail(confirmationMailOptions);
    console.log("Confirmation Email sent successfully.");
    console.log("Confirmation Info object:", confirmationInfo);

    // Envoi de l'e-mail de la commande
    const orderInfo = await transporter.sendMail(orderMailOptions);
    console.log("Order Email sent successfully.");
    console.log("Order Info object:", orderInfo);

    res.status(200).json({ message: "Emails sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});



// newsLetter


module.exports = Router;
