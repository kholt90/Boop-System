const CharacterController = require('../controllers/character.controller');
const { Character } = require('../models/character.model');

module.exports = function(app) {
    app.post('/api/character', CharacterController.createCharacter);
    app.get('/api/character', CharacterController.getAllCharacters);
    app.get('/api/character/:id', CharacterController.getCharacter);
    // app.put('/api/character/:id', CharacterController.updateCharacter);
    // app.delete('/api/character/:id', CharacterController.deleteCharacter);
};