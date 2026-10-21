const articles = [
    {
        id: 1,
        title: "Belajar Node.js",
        content: "Node.js adalah runtime JavaScript.",
    },
    {
        id: 2,
        title: "Belajar Express",
        content: "Express digunakan untuk membuat server dan API.",
    },
];


function getArticles(req, res){
    res.json(articles);
};

function getArticleById(req, res){
    const id = Number(req.params.id);

    const article = articles.find((p) => p.id === id);

    if(!article){
        res.status(404).json({"message": "Artikel tidak ditemukan"});
    }

    res.json(article);

    
}

function createArticl(req, res){
    const {title, content} = req.body;

    const newArticle = {
        id: articles.length + 1,
        title,
        content,
    };
    articles.push(newArticle);
    res.status(201).json(newArticle);
};

function updateArticle(req, res){
    const id = Number(req.params.id);

    const article = articles.find((p) => p.id === id);
    if(!article){
        return res.status(404).json({message: "artikel tidak ditemukan",})
    }

    const {title, content} = req.body;

    article.title = title;
    article.content = content;

    res.json(article);
}

function deleteArticle(req, res){
    const id = Number(req.params.id);

    const articleIndex = articles.findIndex((p) => p.id === id)

    if(articleIndex === -1){
        return res.status(404).json({ message: "Artikel tidak ditemukan",})

        articles.splice(articleIndex, 1);

        res.json({message: "artikel berhasil dihapus",})
    }
}


module.exports = {
    getArticles,
    getArticleById,
    createArticl,
    updateArticle,
    deleteArticle
}