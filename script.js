// On déclare les variables dino et cactus pour qu'elles soient globales
// (accessibles depuis l'ensemble du fichier), mais on ne peut pas les
// initialiser pour l'instant, car la page n'est probablement pas encore chargée
// (les variables vaudraient null si on faisait cela). On va initialiser les
// variables dans une fonction d'initialisation, *APRÈS* le chargement de la
// page.

let dino;
let cactus;

function saut (event) {
    const key = event.key;

    // On ne saut que si on n'est pas déjà en train de sauter, et uniquement si
    // la touche SPACE est appuyée.
    if (key === ' ' && !dino.classList.contains('saut')) {
        dino.classList.add('saut');
        setTimeout(function () {
            dino.classList.remove('saut');
        }, 300);
    }
}

function initialisation() {
    // Fonction d'initialisation, appelée après le chargement de la page (au
    // bout du script).

    dino = document.getElementById('dino');
    cactus = document.getElementById('cactus')
    
    document.addEventListener('keydown', saut);
    
}

/* Avec ce bout de code la console ne fait que mettre des erreurs   
let estVivant = setInterval(function () {
    let dinoHaut = parseInt(window.getComputerStyle(dino).getPropertyValue('haut'));
    
    let cactusGauche = parseInt(window.getComputerStyle(cactus).getPropertyValue('gauche'));

    if(cactusGauche < 50 && cactusGauche > 0 && dinoHaut >= 140) {
        alert('Perdu !');
    }
    
}, 10); */



// On demande au navigateur d'appeler la fonction d'initialisation après avoir
// chargé la page.
window.addEventListener('load', () => initialisation());