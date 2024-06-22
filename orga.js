document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Merci pour votre message, ' + name + ' !');
        // Ajoutez ici le code pour envoyer les données au serveur
        document.getElementById('contactForm').reset();
    } else {
        alert('Veuillez remplir tous les champs.');
    }
});
