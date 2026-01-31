import * as SimpleIcons from 'simple-icons';
import { renderIcon } from "./utils/renderIcon.js";

Promise.all([
  fetch('/data/socialmedia.json').then(r => r.json()),
  fetch('/components/socialnav.html').then(r => r.text())
]).then(([data, comp]) => {
  const socialnav = document.getElementById("social");

  const linkAnimations = [];

  data.forEach((media, index) => {
    const links = document.createElement('a');
    links.innerHTML = comp;
    links.className =
      'w-16 h-16 border-l-3 border-t-2 border-b-2 bg-radial-[at_75%_50%] from-transparent from-40% to-white/50 rounded-full flex flex-col justify-center items-center hover:scale-120 transition-transform duration-200';

    links.href = media.url;
    links.target = "_blank";
    links.style.opacity = 0;

    links.onmouseenter = () => {
      links.querySelector('#name').style.display = 'block';
    };

    links.onmouseleave = () => {
      links.querySelector('#name').style.display = 'none';
    };

    links.querySelector("#icon").innerHTML = renderIcon(SimpleIcons[media.id], 24);
    links.querySelector("#name").textContent = SimpleIcons[media.id].title;

    socialnav.appendChild(links);

    const anim = links.animate(
      {
        opacity: [0, 1],
        transform: ['rotateZ(90deg)', 'rotateZ(0deg)']
      },
      {
        duration: 200,
        easing: 'ease-in-out',
        fill: 'forwards',
        delay: index * 100
      }
    );

    linkAnimations.push(anim.finished);
  });

  // 🔁 Wait until ALL link animations are done
  Promise.all(linkAnimations).then(() => {
    document.querySelectorAll('#social #icon').forEach((icon, i) => {
      icon.animate(
        {
          opacity: [0, 1]
        },
        {
          duration: 250,
          easing: 'ease-out',
          fill: 'forwards',
          delay: i * 80
        }
      );
    });
  });
});
