require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());


const articlesRoute = require("./routes/articles.route");

app.use("/api/articles", articlesRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server ini berjalan di http://localhost:${PORT}`)
});