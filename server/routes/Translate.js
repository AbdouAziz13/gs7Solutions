const express = require("express");
const Router = express.Router();
const axios = require("axios")


Router.post("/", async (req, res) => {
    const options = {
        method: 'POST',
        url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': '0aa38ca65amshc7a52b43bc3f167p1405c0jsn0550d9cad49d',
          'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
        },
        data: {
          from: 'fr',
          to: 'en',
          q: req.body.text || 'Hello ! Rapid Translate Multi Traduction'
        }
      };
    
      try {
        const response = await axios.request(options);
        res.json(response.data);
      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
    
});

module.exports = Router;
