const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const configViewEngine = (app) => {
    app.set('views', path.join(__dirname, '../views'));
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '../public')));  
    // parse application/json
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));    
}

module.exports = configViewEngine;