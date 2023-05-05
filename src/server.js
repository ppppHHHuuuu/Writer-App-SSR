'use strict'
require('dotenv').config();
const express = require('express');
const app = express();

const configViewEngine = require('./config/serverConfig');
const docRouter = require('./routes/docRoutes');
const mainRouter = require('./routes/mainRoutes');
const port = process.env.PORT;

configViewEngine(app);

app.use('/', mainRouter);
app.use('/doc', docRouter);
app.listen(port);
