////// Main setup for React and Express
const express = require('express');
const app = express();
// const port = 8000;
const cors = require('cors');
app.use(cors());
require('./server/config/mongoose.config'); 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
require('./server/routes/person.routes')(app); 
app.listen(8000, () => console.log(`Listening on port: 8000`) );



