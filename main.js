document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav__toggle');
  var links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var aberto = links.classList.toggle('aberto');
      toggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('aberto');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
