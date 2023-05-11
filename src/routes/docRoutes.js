const express = require("express");
const docRouter = express.Router();
const { getDocPage, postName } = require("../controllers/docController");
const { Blog } = require("../models/blog");
const validation = (req, res, next) => {
    const { title, doc } = req.body;
    console.log(title);
    if (!title) {
        res.status(400).send({ error: "missing title " });
    } else if (!doc) {
        res.status(400).send({ error: "blank document" });
    } else {
        next();
    }
};

// const checkDuplicate = async (req, res, next) => {
//     const { title, doc } = req.body;
//     const titleDB = Blog.findAll({
//         atti,
//     });
// };

async function createBlog(title, content) {
    Blog.create({
        title: title,
        content: content,
    });
}
async function findContent(title) {
    try {
        const blog = await Blog.findAll({
            attributes: ["content"],
            where: {
                title: title,
            },
        });
        if (blog) {
            console.log("content: " + blog[0].content);
            return blog[0].content;
        }
    } catch (error) {
        console.log("Error: Cant get" + error);
    }
}
docRouter.get("/:id", async (req, res) => {
    let title = req.params.id;
    console.log("title: " + title);
    let content = await findContent(title);
    console.log("content " + content);
    res.render("doc", { title: `${title}`, doc: content });
});

docRouter.post("/:id", validation, (req, res) => {
    const { title, doc } = req.body;

    createBlog(title, doc);
    res.render("doc", { title: title, doc: doc });
    console.log("data sent from server:" + title + " " + doc);
});
module.exports = docRouter;
