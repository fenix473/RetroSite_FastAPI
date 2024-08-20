document.addEventListener('DOMContentLoaded', () => {
    const topBar = document.querySelector('.top-bar');
    const logo = document.querySelector('.LAB473');
    let lastScrollTop = 0;
    const shrinkOffset = 50; // Amount of pixels to scroll before shrinking
    const delay = 50; // Delay in milliseconds
    let timeoutId = null;

    // Debounce function
    function debounce(func, wait) {
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeoutId);
                func(...args);
            };
            clearTimeout(timeoutId);
            timeoutId = setTimeout(later, wait);
        };
    }

    // The function to handle shrinking
    const handleShrink = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > shrinkOffset) {
            // Scrolling down & past the shrinkOffset
            topBar.classList.add('shrink');
            logo.classList.add('shrink');
        } else if (scrollTop < shrinkOffset) {
            // Scrolled back to the top
            topBar.classList.remove('shrink');
            logo.classList.remove('shrink');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    // Create a debounced version of handleShrink
    const debouncedHandleShrink = debounce(handleShrink, delay);

    // Add the scroll event listener with the debounced function
    window.addEventListener('scroll', debouncedHandleShrink, false);
});