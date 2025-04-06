// Example backend for receiving articles
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/api/articles", (req, res) => {
    const { title, content } = req.body;

    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required." });
    }

    // Simulate saving the article (e.g., to a database)
    console.log("Article received:", { title, content });

    // Respond with success
    res.status(201).json({ message: "Article uploaded successfully!" });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});