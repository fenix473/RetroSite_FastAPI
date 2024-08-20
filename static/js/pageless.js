document.addEventListener('DOMContentLoaded', () => {
    const contentDiv = document.getElementById('content');
    const links = document.querySelectorAll('nav a');

    async function loadContent(pageId) {
        try {
            const response = await fetch(`/api/content/${pageId}`);
            const data = await response.json();
            contentDiv.innerHTML = data.content;
        } catch (error) {
            console.error('Error loading content:', error);
            contentDiv.innerHTML = 'Error loading content.';
        }
    }


    // Load home page by default
    loadContent('home');
});