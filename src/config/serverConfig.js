const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const configViewEngine = (app) => {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../views'));
    
    
    app.use(express.static(path.join(__dirname, '../public')));  
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));    
}

module.exports = configViewEngine;