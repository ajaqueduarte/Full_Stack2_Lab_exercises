const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Updated MongoDB connection string without deprecated options
mongoose.connect('mongodb+srv://admin:admin@cluster0.u3eb0kz.mongodb.net/?retryWrites=true&w=majority');

app.get('/', (req, res) => {
    res.send('Welcome to the User API!');
  });
  
app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Use Mongoose to fetch all users
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({error: error.message});
  }
});
  
app.post('/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
