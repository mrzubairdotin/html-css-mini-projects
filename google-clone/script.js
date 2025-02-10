// Function to Perform Google Search
function performSearch() {
    // Get the search term from input field
    const searchTerm = document.querySelector(".input").value;

    // Redirect to Google search results page with the search term
    window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
}
