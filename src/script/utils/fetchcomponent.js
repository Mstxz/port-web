fetch('/src/components/header.html').then(res => res.text()).then(comp => {
    let header = document.querySelector('header');
    header.classList = "flex justify-evenly items-center h-16 fixed w-full";
    header.innerHTML = comp;
});