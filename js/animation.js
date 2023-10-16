document.addEventListener('DOMContentLoaded', function () {
    ScrollReveal().reveal('.ot-heading, .ot-heading h2', {
        duration: 1000,
        scale: 0.5,
        viewFactor: 0.5,
        origin: 'bottom',
        reset: false
    });

    ScrollReveal().reveal('.text-white', {
        duration: 1000,
        scale: 0.5,
        viewFactor: 0.5,
        origin: 'top',
        reset: false
    });
    ScrollReveal().reveal('.text-dark', {
        duration: 1000,
        scale: 0.5,
        viewFactor: 0.5,
        origin: 'top',
        reset: false
    });

});


ScrollReveal().reveal('[data-sr]', {
    duration: 1000,    // Animation duration in milliseconds
    origin: 'left',    // Initial position of the element
    distance: '20px',  // Distance the element moves
    reset: true        // Reset the animation on each reveal
});
