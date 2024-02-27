function switchTheme() {
    document.body.classList.toggle('is-white');
    document.body.classList.toggle('is-gray');
    document.querySelectorAll('.menu-lateral').forEach(function(nav) {
        nav.classList.toggle('nav-dark');
    });
}

document.getElementById('switchBtn').addEventListener('click', switchTheme);
