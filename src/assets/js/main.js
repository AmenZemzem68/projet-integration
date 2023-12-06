document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.sticky-top');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            navbar.classList.add('bg-primary', 'shadow-sm');
            navbar.style.top = '0px';
        } else {
            navbar.classList.remove('bg-primary', 'shadow-sm');
            navbar.style.top = '-150px';
        }
    });
});

function myFunction() {
    var element = document.getElementById("services-section");
    element.classList.toggle("open");
}