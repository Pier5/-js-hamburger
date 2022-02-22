let menu = document.getElementsByClassName('fa-bars')[0];
let noMenu = document.getElementsByClassName('fa-times')[0];

menu.addEventListener('click', function() {
    document.getElementsByClassName('hamburger-menu')[0].classList.add('active');
})

noMenu.addEventListener('click', function() {
    document.getElementsByClassName('hamburger-menu')[0].classList.remove('active');
})


















