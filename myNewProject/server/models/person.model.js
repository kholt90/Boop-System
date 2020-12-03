const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    characterName: { type: String },
    Strength: { type: Number },
    Dexterity: { type: Number },
    Constitution: { type: Number },
    Intelligence: { type: Number },
    Wisdom: { type: Number },
    Charisma: { type: Number },
}, { timestamps: true });

module.exports.Person = mongoose.model('Person', PersonSchema);