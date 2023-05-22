'user strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyparser = require("body-parser");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(cors());
app.use(bodyparser.json());

app.use('/api' , eventRoutes.routes);

app.listen(config.port,() => console.log('server is listening on https://localhost:' + config.port));
