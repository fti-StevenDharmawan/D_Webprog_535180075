const mongoose = require('mongoose');

const menuSchema = mongoose.Schema({
    name: String, 
    img: String, 
    description: String,
    price: Number
});

module.exports = mongoose.model("Menu", menuSchema);