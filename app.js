// ============================================
// LEARNING JAVASCRIPT - PORTFOLIO INTERACTIONS
// ============================================
// This file teaches you JavaScript basics:
// - How to select HTML elements
// - How to add event listeners
// - How to make pages interactive

// Wait for the page to fully load before running JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    // This makes the page scroll smoothly when you click navigation links
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    // Add a click event to each link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Get the href attribute (like "#about")
            const href = this.getAttribute('href');
            
            // Only do smooth scroll if it's a link to a section (starts with #)
            if (href.startsWith('#')) {
                // Prevent default link behavior
                event.preventDefault();
                
                // Get the section element (remove the # from href)
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                
                // If the section exists, scroll to it smoothly
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    


    
    // ============================================
    // LEARNING TIPS:
    // ============================================
    // 1. Try changing colors in CSS
    // 2. Try adding new sections in HTML
    // 3. Try adding new event listeners in JavaScript
    // 4. Use console.log() to see what's happening
    // 5. Experiment and have fun!
    
});
