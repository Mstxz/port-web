fetch('components/header.html').then(res => res.text()).then(comp => {
    document.querySelector('header').innerHTML = comp;
})