document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.nav-mobile');
    const mobileMenuLinks = document.querySelectorAll('.nav-mobile .nav-button');
    const body = document.body;

    // Toggle menu
    menuButton.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Handle menu item clicks
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('modal-trigger')) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                
                // Close menu
                menuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Open modal
                if (modal) {
                    modal.style.display = 'block';
                }
            } else {
                e.preventDefault();
                
                // Get the target section
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                // Close menu
                menuButton.classList.remove('active');
                mobileMenu.classList.remove('active');
                body.classList.remove('menu-open');
                
                // Smooth scroll to section
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenu.contains(event.target) || 
                            menuButton.contains(event.target);
        
        if (!isClickInside && mobileMenu.classList.contains('active')) {
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu on window resize (if switching to desktop view)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
            menuButton.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
});