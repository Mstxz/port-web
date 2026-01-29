import * as SimpleIcons from "simple-icons";

function renderIcon(icon, size = 24) {
  return `
    <svg
      role="img"
      viewBox="0 0 24 24"
      width="${size}"
      height="${size}"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>${icon.title}</title>
      <path d="${icon.path}" />
    </svg>
  `;
}

Promise.all([
  fetch("public/components/badge.html").then(r => r.text()),
  fetch("public/data/tools.json").then(r => r.json())
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
