const express = require('express');
const {getMainPage} = require('../controllers/mainController');
const mainRouter = express.Router();
const {Blog} = require('../models/blog');
let categoriesList = ['Novel', 'Lifestyle', 'Learning', 'Club', 'Course','Featured', 'Personal'];
let templatesList = ['Empty', "Be patient to client!!", "Finance", "Don xin nghi viec"]
const getLists = async (req, res) => {
    try {
        await Blog.findAll({
            attribute: ['title']
        }).then(blogs => {
            title = blogs.map(blog => blog.title);
            
            console.log(title);
            res.render('main', { titleList: title, categoriesList: categoriesList, templatesList: templatesList});
        })
    }
    catch {
        console.log('couldn\'t get');
    }
}

mainRouter.get('/',getLists );

// mainRouter.get('/', (req, res) => {
//     const link = req.query;
//     console.log(link);
//     console.log('link:' + req.params);
//     // res.send(link);
//     // res.render('main', {titleList: link, doc: 'sdgs'})
    
// });


module.exports = mainRouter;