const express = require('express');
const docRouter = express.Router();
const {getDocPage, postName} = require('../controllers/docController');
const {Blog} = require('../models/blog');
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
async function createBlog(title, content) {
    Blog.create({
        title: title,
        content: content
    })
}
docRouter
    .get('/:id', (req, res) => {
        res.render('doc');
    });

docRouter
    .post('/:id', validation, (req, res) => {
        const {title, doc} = req.body;
        createBlog(title, doc);
        res.send( {'data': 'data sent to server ok'});
        console.log('data sent from server:'+  title + " " + doc); 
})
module.exports = docRouter;