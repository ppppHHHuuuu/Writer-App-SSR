const express = require('express');
const docRouter = express.Router();
const {getDocPage, postName} = require('../controllers/docController');

const validation= (req, res, next) => {
    const {title, doc} = req.body;
    if (!title) {
        res.status(400).send({'error': 'missing title '});    
    }
    else if (!doc) {
        res.status(400).send({'error': 'blank document'});    
    }
    else {
        next();
    }
}

const sendToLocalStorage = (req, res, next) => {
    const {title, doc} = req.body;
    localStorage.setItem(title, doc);
    res.send('stored ok');
    next();    
}
docRouter
    .get('/:id', (req, res) => {
        res.render('doc');
    });

docRouter
    .post('/:id', validation, (req, res) => {
        const {title, doc} = req.body;

        res.send( {'data': 'data sent to server ok'});
        console.log('data sent from server:'+  title + " " + doc); 
})

// router.route('/:id')
    
module.exports = docRouter;