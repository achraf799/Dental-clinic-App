// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 5000;

// Configuration de CORS
const corsOptions = {
    origin: ['https://ecd-full-website.vercel.app/', 'https://ecd-full-website-2.onrender.com'], // Ajout des bonnes URLs
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
};
app.use(cors());
app.use(bodyParser.json());

// Connexion MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Définition du schéma Feedback
const feedbackSchema = new mongoose.Schema({
  nom: String,
  avis: String,
  numberChoice: Number, // Note de 0 à 5
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Route pour récupérer les feedbacks
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
});

// Route pour ajouter un feedback (correction de l'URL)
app.post('/api/feedbacks', async (req, res) => { // Changement de `/api/feedbackspost` vers `/api/feedbacks`
  try {
    const { nom, avis, numberChoice } = req.body;
    const newFeedback = new Feedback({ nom, avis, numberChoice });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: "Error saving feedback", error });
  }
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
