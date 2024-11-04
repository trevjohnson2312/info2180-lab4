document.getElementById('searchButton').addEventListener('click', function() {
    fetch('http://localhost/info2180-lab4/superheroes.php')
        .then(response => response.json())
        .then(data => {
            alert(data);
        })
        .catch(error => console.error('Error:', error));
});

