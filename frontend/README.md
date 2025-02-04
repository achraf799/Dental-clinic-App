# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

// MongoDB Atlas connection string (make sure the password is URL-encoded if needed)
const url = 'mongodb+srv://boudiafmouhammadachraf:ecd12345@cluster0.ceb7a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'ecd_db'; // Your database name

let db;

// Middleware
app.use(cors());
app.use(express.json()); // Express's built-in JSON parser

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    const client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err);
    process.exit(1); // Exit if MongoDB connection fails
  }
}

// Call MongoDB connection before starting the server
connectToMongoDB();

// Route to get all feedbacks
app.get('/api/feedbacks', async (req, res) => {
  try {
    const feedbacksCollection = db.collection('feedbacks');
    const results = await feedbacksCollection.find({}).toArray();
    res.json(results);
  } catch (err) {
    console.error('❌ Error fetching feedbacks:', err);
    res.status(500).send('Error fetching feedbacks');
  }
});

// Route to add feedback
app.post('/api/feedbacks', async (req, res) => {
  try {
    const { name, opinion, rating } = req.body;
    if (!name || !opinion || rating == null) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const feedback = { name, opinion, rating };
    const feedbacksCollection = db.collection('feedbacks');
    const result = await feedbacksCollection.insertOne(feedback);

    res.status(201).json({
      _id: result.insertedId,
      name,
      opinion,
      rating,
    });
  } catch (err) {
    console.error('❌ Error inserting feedback:', err);
    res.status(500).send('Error adding feedback');
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
//===========================================================================================================//
// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json()); // Parse incoming JSON data

let feedbacks = []; // Store feedbacks in-memory for now

// Route to get all feedbacks
app.get('/api/feedbacks', (req, res) => {
  res.json(feedbacks);
});

// Route to add feedback
app.post('/api/feedbacks', (req, res) => {
  const newFeedback = req.body;
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback); // Return the new feedback
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


adfawdf

    .Contact-container1 img {
      width: fit-content;
      display: flex;
      position: absolute;
      width: auto;
      height: -webkit-fill-available;
  }
  .Contact-text {
    width: 100%;
    height: auto;
    margin: 50px 20px;
}
  
.Contact-caption h3 {
  width: auto;
  height: auto;

}
.Contact-container31 {
  flex-direction: column;
}
.Contact-container41 {
flex-direction: column;
}


.Contact-container51 {
flex-direction: column;

}
  

.avis-card {
  flex-direction: column;
  width: 100%;
  padding: 10px;
  margin: 0;

}

.avis-infos {
  flex-direction: column;
  width: 100%;
}
.avis-infos-form {
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0;
  margin: 0;

}

.avis-bar {
  display: none;
}
.avis-googlemaps {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 20px;
}
.Contact-container3 {
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  margin: 50px;
  width: auto;
  background-image: none;
}






