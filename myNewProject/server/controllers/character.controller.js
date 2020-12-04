const {Character} = require('../models/character.model');

module.exports.index = (request, response) => {
    response.json({
       message: "Hello World"
    });
}

module.exports.createCharacter = (request, response) => {
    const { firstName, lastName } = request.body;
    Character.create({
        firstName,
        lastName
    })
        .then(character => response.json(character))
        .catch(err => response.json(err));
}

module.exports.getAllCharacters = (request, response) => {
    Character.find({})
        .then(characters => response.json(characters))
        .catch(err => response.json(err))
}

module.exports.getCharacter = (request, response) => {
    Character.findOne({_id:request.params.id})
        .then(character => response.json(character))
        .catch(err => response.json(err))
}

