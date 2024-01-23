const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 3030;
require("dotenv").config();

// use
app
  .use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["POST", "GET", "PUT", "DELETE"],
      credentials: true,
    })
  )

  .use(bodyParser.json())
  .use(express.static("public"))
  .use(express.static("uploads"))
  .use(cookieParser())
  .use(
    session({
      secret: process.env.COOKIE_SECRET_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
      },
    })
  ).use;

//session

// connection a la base donnée
mongoose.connect(process.env.MONGO_CONNECT_LOCAL);

//   Événement de connexion réussie
mongoose.connection.on("connected", () => {
  console.log("Connexion à la base de données MongoDB réussie ");
});

// Événement d'erreur de connexion
mongoose.connection.on("error", (err) => {
  console.error(
    "Erreur lors de la connexion à la base de données MongoDB:",
    err
  );
});

//   importation et utilisation de nos different endpoint
const userRouter = require("./routes/Users");
app.use("/auth", userRouter);

const uploadRouter = require("./routes/upload");
app.use("/upload", uploadRouter);

const publicationRouter = require("./routes/publication");
app.use("/publications", publicationRouter);

// slider router
const sliderRouter = require("./routes/sliderMedia");
app.use("/slider", sliderRouter);

// roouter to link a slider  to a media

const linkSliderMedia = require("./routes/LinkSliderMedia");
app.use("/linktoslider", linkSliderMedia);

//event
const calendarERouter = require("./routes/Calendar");
app.use("/event", calendarERouter);
// mail
const mailRouter = require("./routes/MailServices");
app.use("/sendMail", mailRouter);

//ckEditor Upload Image
const joditRouter = require("./routes/joditUpload");
app.use("/", joditRouter);
//
const joditUpload = require("./routes/joditUpload");
app.use("/upload/image", joditUpload);

// translate
const Translate = require("./routes/Translate");
app.use("/translation", Translate);

app.listen(PORT, () =>
  console.log(`l'application ecoute sur le port : ${PORT}`)
);
