fetch('sample.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('title').textContent = data.title;
        document.getElementById('message').textContent = data.message;
    })
    .catch(error => {
        console.error('Error loading JSON:', error);
    });

