// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // For environment variables

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define the Feedback Schema
const feedbackSchema = new mongoose.Schema({
  nom: String,
  avis: String,
  numberChoice: Number, // Rating (0 to 5)
}, { timestamps: true });

const Feedback = mongoose.model("Feedback", feedbackSchema);

// Route to get all feedbacks
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ message: "Error fetching feedbacks", error });
  }
});

// Route to add feedback
app.post('/api/feedbacks', async (req, res) => {
  try {
    const { nom, avis, numberChoice } = req.body;
    const newFeedback = new Feedback({ nom, avis, numberChoice });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: "Error saving feedback", error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
