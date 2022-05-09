const navMenu = document.getElementById('nav-menu');
const ham = document.getElementById('ham');
const content = document.getElementById('content');

content.addEventListener('touchstart', () => {
    visible = navMenu.getAttribute('toggle');

    if (visible == 'true') {
        navMenu.setAttribute('toggle', false);
    }
});

ham.addEventListener('click', () => {
    visible = navMenu.getAttribute('toggle');

    if (visible == 'false') {
        navMenu.setAttribute('toggle', true);
    } else {
        navMenu.setAttribute('toggle', false);

    }
});