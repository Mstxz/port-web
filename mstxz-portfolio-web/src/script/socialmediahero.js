let hero = document.getElementById("hero");

/* Social Media Button */
let socialmedia = hero.querySelectorAll('a');

socialmedia.forEach((button, index) => {
    button.classList = "text-2xl bg-radial from-transparent to-white/50 flex justify-center items-center w-14 h-14 rounded-full border-l-4 border-b-2 border-t-2 shadow-lg hover:scale-120 transition-transform duration-200"
    button.style.opacity = 0;
    button.animate({
        opacity: [0,1],
        transform: ['translateY(-10px)','translateY(0px)']
    },
    {
        fill: 'forwards',
        delay: (index+1) * 100,
        easing: 'ease-in-out',
        duration: 500
    });
});