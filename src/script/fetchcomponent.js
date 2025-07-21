fetch('components/header.html').then(res => res.text()).then(data => {document.getElementById('header').innerHTML = data;}); //header
fetch('components/loader.html').then(res => res.text()).then(data => {document.getElementById('loader').innerHTML = data;}); //loader
fetch('components/particle.html').then(res => res.text()).then(data => {document.getElementById('particle').innerHTML = data;});//particle
fetch('components/menu.html').then(res => res.text()).then(data => {document.getElementById('menu').innerHTML = data;});//menu