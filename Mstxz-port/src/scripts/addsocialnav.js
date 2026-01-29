import * as SimpleIcons from 'simple-icons';
import { renderIcon } from "./utils/renderIcon.js";


fetch('/data/socialmedia.json').then(r => r.json()).then(data => {
    const socialnav = document.getElementById("social");

    data.forEach(media => {
        let links = document.createElement('a');
        links.innerHTML = '<div id="icon"></div>';
        links.classList = 'w-16 h-16 border-l-3 border-t-2 border-b-2 bg-radial-[at_75%_50%] from-transparent from-40% to-white/50 rounded-full flex justify-center items-center hover:scale-120 transition-transform duration-200';
        links.href = media.url;

        links.onmouseover = () => {
            links.style.backgroundColor = `#${media.id.hex}`
        }
        links.target = "_blank";
        links.querySelector("#icon").innerHTML = renderIcon(SimpleIcons[media.id], 24);

        socialnav.appendChild(links);
    });
});