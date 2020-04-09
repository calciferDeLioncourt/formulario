let contenido = `<div class="social-bar-icon-facebook" title="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </div>
                <div class="social-bar-icon-instagram" title="Instagram">
                    <i class="fab fa-instagram"></i>
                </div>
                <div class="social-bar-icon-whatsapp" title="Whatsapp">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div class="social-bar-icon-messenger" title="Messenger">
                    <i class="fab fa-facebook-messenger"></i>
                </div>
                <div class="social-bar-icon-github" title="Github">
                    <i class="fab fa-github"></i>
                </div>
                <div class="social-bar-icon-web" title="Web">
                    <i class="fas fa-globe"></i>
                </div>`;
let socialBar = document.createElement('div');
socialBar.setAttribute("class","social-bar");
socialBar.innerHTML = contenido;
document.body.appendChild(socialBar);

window.addEventListener('load', () => {
    document.querySelector('.social-bar-icon-facebook').addEventListener('click', () => {
        window.open('https://fb.me/jizradesign');
    });
    document.querySelector('.social-bar-icon-instagram').addEventListener('click', () => {
        window.open('https://www.instagram.com/jizradesign');
    });
    document.querySelector('.social-bar-icon-whatsapp').addEventListener('click', () => {
        window.open('https://api.whatsapp.com/send?phone=+5219662292&text=Hola');
    });
    document.querySelector('.social-bar-icon-messenger').addEventListener('click', () => {
        window.open('https://m.me/jizradesign');
    });
    document.querySelector('.social-bar-icon-github').addEventListener('click', () => {
        window.open('https://github.com/calciferDeLioncourt');
    });
    document.querySelector('.social-bar-icon-web').addEventListener('click', () => {
        window.open('https://jizratest.eu5.org');
    });
});
