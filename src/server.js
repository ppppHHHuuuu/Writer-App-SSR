'use strict'
const express = require('express');
const configViewEngine = require('./config/serverConfig');
const docRouter = require('./routes/docRoutes');
const mainRouter = require('./routes/mainRoutes');

const app = express();
const port = 8086;

configViewEngine(app);

app.use('/', mainRouter);
app.use('/doc', docRouter);

app.listen(port);