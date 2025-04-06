document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("new-article-form");
    const articleList = document.getElementById("article-list");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get the title and content from the form
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Create a new article element
        const article = document.createElement("div");
        article.classList.add("article");

        const articleTitle = document.createElement("h3");
        articleTitle.textContent = title;

        const articleContent = document.createElement("p");
        articleContent.textContent = content;

        // Append the title and content to the article
        article.appendChild(articleTitle);
        article.appendChild(articleContent);

        // Add the article to the article list
        articleList.appendChild(article);

        // Clear the form
        form.reset();
    });
});