function displayCommande(type) {
    var serveurCommandes = document.getElementById('commande-serveur');
    var economieCommandes = document.getElementById('commande-economie');
    var moderationCommandes = document.getElementById('commande-moderation');

    serveurCommandes.style.display = 'none';
    economieCommandes.style.display = 'none';
    moderationCommandes.style.display = 'none';

    switch (type) {
        case 'serveur':
            serveurCommandes.style.display = 'block';
            break;
        case 'economie':
            economieCommandes.style.display = 'block';
            break;
        case 'moderation':
            moderationCommandes.style.display = 'block';
            break;
        default:
            break;
    }
}

function selectButton(buttonElement) {
    var buttons = document.getElementsByClassName('commande-button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    buttonElement.classList.add('active');
}

window.onload = function() {
    displayCommande('serveur'); // Active par défaut le bouton "Serveur"
}

