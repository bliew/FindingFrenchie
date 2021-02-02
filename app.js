const imgPosition = document.querySelector('#frenchie__img');

//Alert user they have found the french bulldog and move image
function moveFrenchie() {
    window.alert("Horray! You found the frenchie!")

    var leftPosition = Math.floor(Math.random() * 2000);
    var topPosition = Math.floor(Math.random() * 1000);

    imgPosition.style.left = leftPosition + 'px';
    imgPosition.style.top = topPosition + 'px';
}

imgPosition.addEventListener('click', moveFrenchie);