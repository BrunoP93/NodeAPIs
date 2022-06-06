const mongoose = require('mongoose');
const router = require('../routes/personRoutes');

const Person = mongoose.model('Person', {
    name: String,
    salary: Number,
    approved: Boolean
})

module.exports = Person;