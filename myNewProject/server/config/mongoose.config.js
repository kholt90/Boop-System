////// Database
const mongoose = require('mongoose');
const uri = "mongodb+srv://keith:boop@boopity.qbsbv.mongodb.net/Boopity?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));