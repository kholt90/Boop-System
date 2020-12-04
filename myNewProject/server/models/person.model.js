const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    characterName: { type: String },
    strength: { type: Number },
    dexterity: { type: Number },
    constitution: { type: Number },
    intelligence: { type: Number },
    wisdom: { type: Number },
    charisma: { type: Number },
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);