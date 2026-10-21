const express = require('express');

const router = express.Router();

const {
    getArticles,
    getArticleById,
    createArticl,
    updateArticle,
    deleteArticle
} = require("../controllers/articles.controller");

router.get("/", getArticles);
router.get("/:id", getArticleById);
router.post("/", createArticl);
router.put("/:id", updateArticle);
router.delete("/:id", deleteArticle);

module.exports = router;