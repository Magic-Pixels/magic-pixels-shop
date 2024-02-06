const currentUrl = window.location.href;
const urlParams = new URLSearchParams(window.location.search);
const merchParam = urlParams.get('merch');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (link) {
    if (link.getAttribute('href') === currentUrl && (currentUrl == '/' || link.getAttribute('href').includes('merch=' + merchParam)))
        link.classList.add('active');
});