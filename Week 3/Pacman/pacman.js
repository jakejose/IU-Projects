// Pacman Animation:
// When an arrow key is pressed, 
    // pacman should move that direction on the screen
// To make pacman move, 
    // use setAttribute to update the custom CSS variables on .pacman
    // transition and transform allow us to animate the element
    // rotate the pacman to face the direction he is headed

// Pacman Animation:
// When an arrow key is pressed, 
    // pacman should move that direction on the screen
// To make pacman move, 
    // use setAttribute to update the custom CSS variables on .pacman
    // transition and transform allow us to animate the element
    // rotate the pacman to face the direction he is headed

    const pacman = document.querySelector('.pacman');

    let x = 0;
    let y = 0;
    const speed = 10;  // multiplier to move pacman faster
    let rotate = 0;  // in degrees
    
    
    function handleKeyDown(event) { 
        // follow directions - tip, a switch might help here
        if (event.key === "ArrowDown"){
            // MAKE Y GREATER
            y = y + 1;
            pacman.style.setProperty('--y', `${y*speed}px`)
            pacman.style.setProperty('--rotate', `90deg`)
        } else if (event.key === "ArrowUp"){
            // MAKE Y SMALLER
            y = y - 1;
            pacman.style.setProperty('--y', `${y*speed}px`);
            pacman.style.setProperty('--rotate', `270deg`)
        } else if (event.key === "ArrowRight"){
            // MAKE X GREATER
            x = x + 1;
            pacman.style.setProperty('--x', `${x*speed}px`);
            pacman.style.setProperty('--rotate', `0deg`)
        } else if (event.key === "ArrowLeft"){
            // MAKE X SMALLER
            x = x - 1;
            pacman.style.setProperty('--x', `${x*speed}px`);
            pacman.style.setProperty('--rotate', `180deg`)
        }
    }
    
    // add event listener
    window.addEventListener('keydown', handleKeyDown);