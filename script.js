document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("upload-article-form");
    const statusMessage = document.getElementById("status-message");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        // Get the title and content from the form
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;

        // Simulate sending the article to another website
        try {
            const response = await fetch("https://example.com/api/articles", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                statusMessage.textContent = "Article uploaded successfully!";
                statusMessage.style.color = "green";
                statusMessage.style.display = "block";
                form.reset();
            } else {
                throw new Error("Failed to upload the article.");
            }
        } catch (error) {
            statusMessage.textContent = error.message;
            statusMessage.style.color = "red";
            statusMessage.style.display = "block";
        }
    });
});