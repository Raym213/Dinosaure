const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus')


function saut () {
    if (dino.classList != 'saut') {
        dino.classList.add('saut');
        setTimeout(function () {
            dino.classList.remove('saut');
        }, 300);
    }
}

/* Avec ce bout de code la console ne fait que mettre des erreurs   
let estVivant = setInterval(function () {
    let dinoHaut = parseInt(window.getComputerStyle(dino).getPropertyValue('haut'));
    
    let cactusGauche = parseInt(window.getComputerStyle(cactus).getPropertyValue('gauche'));

    if(cactusGauche < 50 && cactusGauche > 0 && dinoHaut >= 140) {
        alert('Perdu !');
    }
    
}, 10); */

document.addEventListener('keydown', function (event) {
    saut();
});