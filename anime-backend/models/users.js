const mongoose = require('mongoose');
const Anime = require('./anime')

const userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  password: {type: String, required: true},
  email: {type: String, required: true},
  anime: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Anime'
  }]
  
});


const User = mongoose.model('User', userSchema)

module.exports = User;