const express = require('express');
const admin = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://diamond-tofu-career-default-rtdb.firebaseio.com'
});

// Create Express app
const app = express();

// Handle API requests
app.get('/', (req, res) => {
  res.status(200).send("Success");

  // handle API request to fetch posts from Firestore
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
