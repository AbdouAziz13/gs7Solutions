const express = require("express");
const router = express.Router();
const calendarModel = require("../models/CalendarModel");


// create new event
router.post("/" , async (req, res) => {
  const { title, location, description, start, end } = req.body;

  const newEvent = new calendarModel({
    title: title,
    start: start,
    end: end,
    location: location,
    description: description,
  });

  await newEvent.save();

  res.json(newEvent);
});

//get all event
router.get("/", async (req, res) => {
  try {
    const listOfEvent = await calendarModel.find({});
    res.status(200).json(listOfEvent);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// delete event
router.delete("/:eventId" ,  async (req, res) => {
  const eventId = req.params.eventId;

  try {
    // Supprimer evenement grace a son id

    await calendarModel.findByIdAndDelete(eventId);

    res.status(200).json({ message: "événement  supprimé avec succes" });
  } catch (error) {
    res.status(500).json({
      error: "Une erreur s'est produite lors de la suppression de la événement",
    });
  }
});

// recuperer une event specifique grace a son id

router.get("/:EventId", async (req, res) => {
  const EventId = req.params.EventId;

  try {
    const event = await calendarModel.findById(EventId);

    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: "event non trouvée" });
    }
  } catch (err) {
    console.error("Erreur lors de la récupération de la event:", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la event" });
  }
});

// update event
router.put("/:eventId", async (req, res) => {
  const eventId = req.params.eventId;

  // Update the 'updatedEvent' object with the request body data
  const updatedEvent = {
    title: req.body.title,
    start: req.body.start,
    end: req.body.end,
    location: req.body.location,
    description: req.body.description,
  };

  try {
    const event = await calendarModel.findOneAndUpdate(
      { _id: eventId },
      updatedEvent,
      { new: true }
    );

    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: "Événement non trouvé" });
    }
  } catch (err) {
    console.error("Erreur lors de la mise à jour de l'événement:", err);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de l'événement" });
  }
});

module.exports = router;
