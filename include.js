function loadInclude(selector, file) {
    console.log(`Loading content from: ${file} into ${selector}`);
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error("Error loading include file:", error));
}

window.onload = () => {
    loadInclude("#header", "/includes/header.html");
    loadInclude("#nav", "/includes/nav.html");
    loadInclude("#footer", "/includes/footer.html");
};
