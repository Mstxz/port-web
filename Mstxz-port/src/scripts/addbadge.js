import * as SimpleIcons from "simple-icons";
import { renderIcon } from "./utils/renderIcon.js";

Promise.all([
  fetch("/components/badge.html").then(r => r.text()),
  fetch("/data/tools.json").then(r => r.json())
]).then(([badgeTemplate, tools]) => {
  const toolpanel = document.getElementById("tools");

  tools.forEach((tool, index) => {
    const icon = SimpleIcons[tool.id];

    if (!icon) {
      console.warn(`Simple Icon not found: ${tool.id}`);
      return;
    }

    const badge = document.createElement("div");
    badge.innerHTML = badgeTemplate;
    badge.className = "flex gap-2 justify-center px-4 py-2 rounded-full";
    badge.style.opacity = 0;

    badge.querySelector("#icon").innerHTML = renderIcon(icon, 24);
    badge.querySelector("h1").textContent = icon.title;
    badge.style.backgroundColor = `#${icon.hex}`;

    if(tool.bg === "light"){
      badge.style.color = "black";
    }
    else {
      badge.style.color = "white";
    }

    toolpanel.appendChild(badge);

    badge.animate({
      opacity: [0,1]
    },
    {
      fill: "forwards",
      delay: index * 100,
      duration: 200,
      easing: 'ease-in-out'
    });
  });
});
