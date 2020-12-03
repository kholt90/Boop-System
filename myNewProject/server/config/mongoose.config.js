const mongoose = require('mongoose');
// const uri = "mongodb+srv://test_subject:F0JlBIKLinIrUiYW@holtaire.snrrh.mongodb.net/laboratory?retryWrites=true&w=majority";
const uri = "mongodb+srv://keith:boop@boopity.qbsbv.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database."))
    .catch(err => console.log("Something went wrong when connecting to the database,", err));