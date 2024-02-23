const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const ejs = require('ejs');
const urlController = require('./controllers/urlController');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the cors middleware
app.use(cors({origin:'http://localhost:3000'}));

mongoose.connect('mongodb://127.0.0.1:27017/url-shortener-mvc', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', urlController);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
