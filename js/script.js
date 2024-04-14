'use strict';

const arrowUpElements = document.querySelectorAll('.arrow-up');

arrowUpElements.forEach(function(element) {
    
    element.addEventListener('click', function() {

        const details = this.previousElementSibling;            
        
        details.open = !details.open;
        if (details.open) {
            element.classList.remove('rotated');
        } else {
            element.classList.add('rotated');
        }
    });
});