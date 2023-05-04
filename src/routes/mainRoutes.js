const express = require('express');
const {getMainPage} = require('../controllers/mainController');
const mainRouter = express.Router();

mainRouter.get('/', (req, res) => {
    res.render('main');
});

mainRouter.post('/', (req,res) => {
    const {title, doc} = req.body;

})
module.exports = mainRouter;