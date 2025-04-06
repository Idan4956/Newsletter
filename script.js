document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-article-form");
    const articleList = document.getElementById("article-list");

    // Load saved articles from localStorage
    const savedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    savedArticles.forEach(article => addArticleToDOM(article.title, article.content));

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the title and content from the form
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Save the article to localStorage
        const article = { title, content };
        savedArticles.push(article);
        localStorage.setItem("articles", JSON.stringify(savedArticles));

        // Add the article to the DOM
        addArticleToDOM(title, content);

        // Clear the form
        form.reset();
    });

    // Function to add an article to the DOM
    function addArticleToDOM(title, content) {
        const article = document.createElement("div");
        article.classList.add("article");

        const articleTitle = document.createElement("h3");
        articleTitle.textContent = title;

        const articleContent = document.createElement("p");
        articleContent.textContent = content;

        article.appendChild(articleTitle);
        article.appendChild(articleContent);
        articleList.appendChild(article);
    }
});