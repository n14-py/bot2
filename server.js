const express = require("express");
const axios = require("axios");
const path = require("path");

const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const pingTargets = [
  "https://bot2.onrender.com",
  "https://relaxstationbot.onrender.com/" // Cambia esto por la página que quieres hacer ping
];

const hacerPing = async () => {
  for (let url of pingTargets) {
    try {
      await axios.get(url);
      console.log(`Ping exitoso a: ${url}`);
    } catch (error) {
      console.error(`Error al hacer ping a ${url}: ${error.message}`);
    }
  }
};

setInterval(hacerPing, 60000); // Hace ping cada 60 segundos

app.listen(PORT, () => {
  console.log(`Bot 1 escuchando en el puerto ${PORT}`);
});
