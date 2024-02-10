const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Makes this field mandatory
  },
  username: {
    type: String,
    required: true,
    minlength: 4 // Username field must have length >= 4
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, 'Invalid email address'] // Validates email
  },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: {
      type: String,
      required: true,
      validate: [/^[a-zA-Z\s]*$/, 'City name can only contain alphabets and space'] // Allows only alphabets and space
    },
    zipcode: {
      type: String,
      required: true,
      validate: [/^\d{5}-\d{4}$/, 'Zip code format must be like 12345-1234'] // Zip code format validation
    },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true }
    }
  },
  phone: {
    type: String,
    required: true,
    validate: [/^1-\d{3}-\d{3}-\d{4}$/, 'Phone format like 1-123-123-1234 required'] // Validates phone format
  },
  website: {
    type: String,
    required: true,
    validate: [validator.isURL, 'Invalid URL address'] // Validates website URL
  },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true }
  }
});

module.exports = mongoose.model('User', userSchema);