document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.cover1 img');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.classList.add('inactive');
            if (i === index) {
                slide.classList.add('active');
                slide.classList.remove('inactive');
            }
        });
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Initialize the slider
    showSlide(currentSlide);

    // Change slide every 3 seconds
    setInterval(nextSlide, 3000);

    // Optional: Add controls for manual navigation (e.g., buttons)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');
    const profileDropdown = document.getElementById('profile-dropdown');

    profileIcon.addEventListener('click', () => {
        profileDropdown.classList.toggle('show-dropdown');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target)) {
            profileDropdown.classList.remove('show-dropdown');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const profileIcon = document.getElementById('profile-icon');
    const profileDropdown = document.getElementById('profile-dropdown');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Toggle profile dropdown
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the event from bubbling up
        profileDropdown.classList.toggle('show-dropdown');
    });

    // Close dropdown and menu if clicked outside
    window.addEventListener('click', (event) => {
        if (!profileIcon.contains(event.target)) {
            profileDropdown.classList.remove('show-dropdown');
        }
        if (!menuToggle.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
        }
    });
});






