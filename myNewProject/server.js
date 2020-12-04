
const port = 8000;

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/person.routes')(app);
// require('./server/routes/character.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
