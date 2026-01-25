fetch('components/header.html').then(res => res.text()).then(comp => {
    let header = document.querySelector('header');
    header.className = "fixed flex justify-evenly items-center w-screen h-16";
    header.innerHTML = comp;
});