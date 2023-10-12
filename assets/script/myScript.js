document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        // Check if the page has been scrolled
        if (window.scrollY > 0) {
            // If scrolled, add the "scrolled" class to change the background color
            navbar.classList.add('scrolled');
            // Add the "shadow" class to apply a subtle box shadow
            navbar.classList.add('shadow');
        } else {
            // If at the top, remove the "scrolled" class to restore the transparent background
            navbar.classList.remove('scrolled');
            // Remove the "shadow" class to remove the box shadow
            navbar.classList.remove('shadow');
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var goToTopButton = document.getElementById("goToTopBtn");

    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            goToTopButton.style.display = "block";
        } else {
            goToTopButton.style.display = "none";
        }
    }

    function goToTop() {
        // Smooth scroll to the top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    goToTopButton.addEventListener("click", goToTop);
});

