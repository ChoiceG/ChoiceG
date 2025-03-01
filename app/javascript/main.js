document.addEventListener('DOMContentLoaded', function () {
    "use strict";

     // Spinner
     function spinner() {
        const spinnerElement = document.getElementById('spinner');
        
        if (spinnerElement) {
            // After a brief moment, hide the spinner
            setTimeout(function () {
                spinnerElement.classList.remove('show');
            }, 500); // Adjust time as needed to match your spinner duration
        }
    }
    spinner(); // Call the function to hide the spinner after a timeout

    // Initiate the wowjs (Make sure the wowjs library is added as well)
    new WOW().init();

    // Navbar on scrolling
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 300) {
            navbar.style.display = 'flex';
            navbar.classList.add('fadeIn');
        } else {
            navbar.style.display = 'none';
        }
    });

    // Smooth scrolling on the navbar links
    const navbarLinks = document.querySelectorAll(".navbar-nav a");
    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                const target = document.querySelector(this.hash);
                window.scrollTo({
                    top: target.offsetTop - 45,
                    behavior: 'smooth'
                });

                // Handle active class for navbar items
                navbarLinks.forEach(function (item) {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });

    // Back to top button
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Typed Initiate (Make sure you have the Typed.js library added)
    const typedTextOutput = document.querySelector('.typed-text-output');
    if (typedTextOutput) {
        const typedStrings = document.querySelector('.typed-text').textContent;
        const typed = new Typed('.typed-text-output', {
            strings: typedStrings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Modal Video
    const videoButtons = document.querySelectorAll('.btn-play');
    let videoSrc;
    videoButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            videoSrc = this.getAttribute('data-src');
        });
    });

    const videoModal = document.getElementById('videoModal');
    const videoElement = document.getElementById('video');

    videoModal.addEventListener('shown.bs.modal', function () {
        videoElement.src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
    });

    videoModal.addEventListener('hide.bs.modal', function () {
        videoElement.src = videoSrc;
    });

    // Facts counter (Make sure you have counterUp library or equivalent)
    const counterUpElements = document.querySelectorAll('[data-toggle="counter-up"]');
    counterUpElements.forEach(function (element) {
        // Example counter-up logic (you could use libraries like counterUp or custom)
        const countTo = element.getAttribute('data-to');
        let count = 0;
        const interval = setInterval(function () {
            if (count < countTo) {
                count++;
                element.textContent = count;
            } else {
                clearInterval(interval);
            }
        }, 10);
    });

    // Skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(function (skill) {
        const progressBars = skill.querySelectorAll('.progress .progress-bar');
        skill.addEventListener('waypoint', function () {
            progressBars.forEach(function (bar) {
                bar.style.width = bar.getAttribute('aria-valuenow') + '%';
            });
        });
    });

    // Portfolio isotope and filter (Make sure you have isotope library)
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    const portfolioItems = portfolioContainer.querySelectorAll('.portfolio-item');

    portfolioFilters.forEach(function (filter) {
        filter.addEventListener('click', function () {
            portfolioFilters.forEach(function (item) {
                item.classList.remove('active');
            });
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            portfolioItems.forEach(function (item) {
                if (item.classList.contains(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Testimonials carousel (Make sure you have Owl Carousel or equivalent)
    const testimonialCarousel = document.querySelector(".testimonial-carousel");
    if (testimonialCarousel) {
        $(testimonialCarousel).owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            items: 1,
            dots: true,
            loop: true,
        });
    }
});
