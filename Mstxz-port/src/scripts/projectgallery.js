import * as SimpleIcons from 'simple-icons';
import { renderIcon } from "./utils/renderIcon.js";

document.getElementById('gameBtn').addEventListener('click', loadSpotlightedGame);
//document.getElementById('artBtn').addEventListener('click', loadSpotlightedArt);
document.getElementById('musicBtn').addEventListener('click', loadSpotlightedMusic);

function formatTime(sec) {
    if (!isFinite(sec)) return '--:--';   // prevents NaN:NaN
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
}


function loadSpotlightedGame(){
    Promise.all(
        [
            fetch('/data/projects.json').then(r => r.json()),
            fetch('/components/gamegallery.html').then(r => r.text())
        ]
    ).then(([data,comp]) => {
        let project = document.getElementById('gallery');

        project.innerHTML = "";

        data.forEach(element => {
            console.log(element.spotlighted);

            if(element.spotlighted == true){
                let gallery = document.createElement('div');
                gallery.className = 'bg-black/50 w-75 rounded-lg'

                gallery.innerHTML = comp;

                gallery.querySelector('img').src = element.images;
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
            }
        });
    });
}

function loadSpotlightedMusic() {
  Promise.all([
    fetch('/data/track.json').then(r => r.json()),
    fetch('/components/trackgallery.html').then(r => r.text())
  ]).then(([data, comp]) => {
    const project = document.getElementById('gallery');
    project.innerHTML = "";

    data.forEach((element, index) => {
        const track = document.createElement('div');
        track.className = "bg-slate-900/50 flex justify-between items-center w-9/10 px-4 py-2 rounded-lg h-12";
        track.innerHTML = comp;
        track.style.opacity = 0;

        const audio = new Audio(element.trackurl);
        audio.preload = 'metadata';

        track.querySelector('#trackname').textContent = element.name;

        audio.onloadedmetadata = () => {
            track.querySelector('#duration').textContent = formatTime(audio.duration);
        };

        track.querySelector('#playbutton').onclick = () => {
            audio.currentTime = 0;
            audio.play().catch(err => {
            console.error('Audio play failed:', err);
            });
        };

        track.animate(
            {
                opacity: [0,1],
                transform: ['translateY(20px)','translateY(0px)']
            },
            {
                duration: 250,
                delay: index * 100,
                easing: 'ease-in-out',
                fill: 'forwards'
            }
        );

        project.appendChild(track);
    });
  });
}



loadSpotlightedMusic();