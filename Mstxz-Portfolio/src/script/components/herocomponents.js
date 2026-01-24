let hero = document.getElementById('hero');

let mediaButtons = hero.querySelectorAll('a');

mediaButtons.forEach((button, i) => {
    button.style.opacity = 0;
    button.className = "bg-radial-[at_50%_75%] from-transparent to-white/50 w-16 h-16 flex items-center justify-center rounded-full border-2 hover:scale-115 transition-transform duration-200"
    button.animate({
        opacity: [0,1],
        transform: ['translateY(-20px)','translateY(0px)']
    },
    {
        fill: "forwards",
        duration: 500,
        easing: 'ease-out',
        delay: 100 * i
    });
})
