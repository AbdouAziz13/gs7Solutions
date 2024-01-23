const express = require("express");
const router = express.Router();
const publicationModel = require("../models/publication");
const NewsLetterModel = require("../models/NewsLetter");
const nodemailer = require("nodemailer");

// creer une publication
router.post("/", async (req, res) => {
  const { title, publicationBody, publicationUrl } = req.body;

  const newPublication = new publicationModel({
    title: title,
    publicationBody: publicationBody,
    publicationUrl: publicationUrl,
  });

  await newPublication.save();

  // Envoi d'un e-mail à tous les abonnés à la newsletter
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const newsletterSubscribers = await NewsLetterModel.find({});

    const mailOptions = {
      from: process.env.EMAIL_USER,
      subject: "Nouvelle publication sur notre site",
      html: `
      <p>Une nouvelle publication est disponible sur notre site.</p>
      <p>Titre: <a href="http://localhost:3000/publications/${publicationUrl}">${title}</a></p>
    `,
    };

    for (const subscriber of newsletterSubscribers) {
      mailOptions.to = subscriber.newsLetterEmail;
      await transporter.sendMail(mailOptions);
      console.log(`Email sent to ${subscriber.newsLetterEmail}`);
    }

    res.json(newPublication);
  } catch (error) {
    console.error("Error sending email to newsletter subscribers:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// recuperer la liste des publicaton
router.get("/", async (req, res) => {
  const listOfPublications = await publicationModel.find({});
  if (!listOfPublications) {
    res.json("la liste des publication est vide");
  }
  res.json(listOfPublications);
});

// supprimer une publication
router.delete("/:publicationId", async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    // Supprimer publication grace a son id

    await publicationModel.findByIdAndDelete(publicationId);

    res.status(200).json({ message: "publication supprimée avec succes" });
  } catch (error) {
    res.status(500).json({
      error:
        "Une erreur s'est produite lors de la suppression de la publication",
    });
  }
});

// recuperer une publication specifique grace a son id

router.get("/:publicationId", async (req, res) => {
  const publicationId = req.params.publicationId;

  try {
    const publication = await publicationModel.findById(publicationId);

    if (publication) {
      res.json(publication);
    } else {
      res.status(404).json({ message: "Publication non trouvée" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération de la publication:", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la publication" });
  }
});

// modification d'une publicztion

router.put("/update/:publicationId", async (req, res) => {
  const publicationId = req.params.publicationId;
  const updatedPublication = req.body; // Nouvelles données de publication

  try {
    const publication = await publicationModel.findOneAndUpdate(
      { _id: publicationId },
      updatedPublication,
      { new: true }
    );

    if (publication) {
      res.json(publication);
    } else {
      res.status(404).json({ message: "Publication non trouvée" });
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour de la publication:", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de la publication" });
  }
});

module.exports = router;
