import * as SimpleIcons from 'simple-icons';
import { renderIcon } from "./utils/renderIcon.js";

Promise.all(
    [
        fetch('/data/projects.json').then(r => r.json()),
        fetch('/components/gallery.html').then(r => r.text())
    ]
).then(([data,comp]) => {
    let project = document.getElementById('gallery');

    data.forEach(element => {
        let gallery = document.createElement('div');
        gallery.className = 'bg-black/50 w-75 rounded-lg'

        gallery.innerHTML = comp;

        gallery.querySelector('h1').textContent = element.name;
        gallery.querySelector('p').textContent = element.desc;

        element.tools.forEach(tech => {
            const icon = SimpleIcons[tech];

            if (!icon) {
                console.warn("Icon not found:", tech);
                return;
            }

            let elm = document.createElement('div');
            elm.className = 'bg-slate-600 p-2 rounded-lg'
            elm.innerHTML = renderIcon(icon, 30);

            gallery.querySelector("#techstack").appendChild(elm);
        });

        let stats = gallery.querySelector('#status');

        if(element.status == "done"){
            let links = document.createElement('a');
            links.className = 'bg-slate-400 px-4 py-1 rounded'
            links.target = "_blank";
            links.href = element.url;
            links.textContent = "Visit";
            stats.appendChild(links)
        }
        else if(element.status == "working"){
            stats.textContent = "Coming Soon..."
        }


        project.appendChild(gallery);
    });
});
