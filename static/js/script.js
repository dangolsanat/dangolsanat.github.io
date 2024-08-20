document.addEventListener('DOMContentLoaded', function() {
    // Hover effects for resume and education sections
    function setupHoverEffects(section) {
        const fadeElements = section.querySelectorAll("#res-1, #res-2, #res-3, #res-0");
        
        function handleHover(event, action) {
            fadeElements.forEach(el => {
                if (el !== event.currentTarget) {
                    el.classList[action]("show");
                }
            });
        }
        
        fadeElements.forEach(el => {
            el.addEventListener("mouseenter", function(event) {
                handleHover(event, "add");
            });
            el.addEventListener("mouseleave", function(event) {
                handleHover(event, "remove");
            });
        });
    }
    



    const resumeSection = document.querySelector(".resume");
    const educationSection = document.querySelector(".education");
    
    if (resumeSection) setupHoverEffects(resumeSection);
    if (educationSection) setupHoverEffects(educationSection);
    
    // Scroll effect for movingDiv and mainNav
    const movingDiv = document.querySelector('.moving-div');
    const mainNav = document.querySelector('.main-nav');
    
    const startPosition = 1070; // Initial position in pixels for movingDiv
    const maxPosition = 1350; // Max position in pixels for movingDiv
    const startPositionNav = 630; // Initial position in pixels for mainNav
    const maxPositionNav = 50; // Max position in pixels for mainNav

    // Set initial positions
    movingDiv.style.left = startPosition + 'px';
    movingDiv.style.position = 'sticky';
    
    function handleScroll() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Handle movingDiv position
        let newXPosition = Math.min(startPosition + scrollPosition, maxPosition);
        movingDiv.style.position = scrollPosition < 180 ? "sticky" : "fixed";
        movingDiv.style.left = newXPosition + 'px';
        movingDiv.style.top = "10px";
        
        // Handle mainNav position
        let newXPositionNav = Math.max(startPositionNav - scrollPosition * 4, maxPositionNav);
        mainNav.style.position = scrollPosition < 30 ? "sticky" : "fixed";
        mainNav.style.left = newXPositionNav + 'px';
        mainNav.style.top = scrollPosition < 30 ? "" : "10px";
        
        // Visibility of elements based on scroll position
        const visibilityElements = [
            { el: document.querySelector('#sanat'), offset: 200 },
            { el: document.querySelector('#res-1'), offset: 600 },
            { el: document.querySelector('#res-2'), offset: 800 },
            { el: document.querySelector('#res-3'), offset: 950 },
            { el: document.querySelector('#res-0'), offset: 550 },
            { el: document.querySelector('#edu-0'), offset: 1150 },
            { el: document.querySelector('#edu-1'), offset: 1200 },
            { el: document.querySelector('#edu-2'), offset: 1300 }
        ];

        let offset = 1250; // Initial offset for icons

        // Populate visibilityElements array with icons
        document.querySelectorAll(".icons-list-side").forEach(icon => {
            visibilityElements.push({ el: icon, offset: offset });
            offset += 50;  // Increment the offset for each icon
        });

        // Check visibility
        visibilityElements.forEach(({ el, offset }) => {
            if (el) {
                if (scrollPosition < offset) {
                    el.classList.remove('showing');
                } else {
                    el.classList.add('showing');
                }
            }
        });
    }






    // Initial check and event listeners
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set up the state

    // Resize handling
    function handleResize() {
        const windowWidth = window.innerWidth;
        const thresholdWidth = 1300; // Threshold width for hiding elements

        const sideElements = document.querySelectorAll('.side-a');
        const posBElements = document.querySelectorAll('.pos-b');
        const iconBElements = document.querySelectorAll('.icon-b');
        const navBElements = document.querySelectorAll('.main-nav');

        if (windowWidth < thresholdWidth) {
            sideElements.forEach(el => el.style.opacity = '0');
            posBElements.forEach(el => el.style.opacity = '0');
            iconBElements.forEach(el => el.style.opacity = '0');
            navBElements.forEach(el => el.style.opacity = '0');
            sideElements.forEach(el => el.style.transition = 'opacity .3s ease-in-out');
            posBElements.forEach(el => el.style.transition = 'opacity .3s ease-in-out');
            iconBElements.forEach(el => el.style.transition = 'opacity .3s ease-in-out');
            navBElements.forEach(el => el.style.transition = 'opacity .3s ease-in-out');


        } else {
            sideElements.forEach(el => el.style.opacity = '1');
            posBElements.forEach(el => el.style.opacity = '1');
            iconBElements.forEach(el => el.style.opacity = '1');
            navBElements.forEach(el => el.style.opacity = '1');
        }
    }

    // Initial resize check and event listener
    handleResize();
    window.addEventListener('resize', handleResize);
});
