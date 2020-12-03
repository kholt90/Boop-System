const mongoose = require('mongoose');

const CharacterSchema = new mongoose.Schema({
    characterName: { type: String },
    Strength: { type: Number },
    Dexterity: { type: Number },
    Constitution: { type: Number },
    Intelligence: { type: Number },
    Wisdom: { type: Number },
    Charisma: { type: Number },
    Equipment: { type: String }
}, { timestamps: true });

module.exports.Character = mongoose.model('Person', CharacterSchema);