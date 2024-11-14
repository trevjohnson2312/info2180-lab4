document.getElementById('searchButton').addEventListener('click', function() {
    // Get the search term from the input field
    const searchTerm = document.getElementById('searchInput').value;
    
    // Construct the URL with the query parameter
    const url = `http://localhost/info2180-lab4/superheroes.php?query=${encodeURIComponent(searchTerm)}`;
    
    // Make a fetch request with the search query
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text(); // Use `.json()` if the PHP script returns JSON
        })
        .then(data => {
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
});
