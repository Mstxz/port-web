import './tailwind.css';

document.querySelector('body').className = "font-primary bg-linear-to-b from-black to-ci-1 text-ci-3 bg-cover bg-center bg-fixed bg-no-repeat w-full h-screen overflow-x-hidden";

fetch('/components/header.html').then(r => r.text()).then(comp => {
    let header = document.querySelector('header');
    header.className = "flex justify-evenly items-center fixed w-screen h-16 z-50 bg-linear-to-b from-black/50 to-transparent";
    header.innerHTML = comp;
});