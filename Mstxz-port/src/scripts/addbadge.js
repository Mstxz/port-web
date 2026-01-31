import * as SimpleIcons from "simple-icons";
import { renderIcon } from "./utils/renderIcon.js";

Promise.all([
  fetch("/components/badge.html").then(r => r.text()),
  fetch("/data/tools.json").then(r => r.json())
]).then(([badgeTemplate, tools]) => {
  const toolpanel = document.getElementById("tools");
  const badges = [];

  tools.forEach((tool, index) => {
    const icon = SimpleIcons[tool.id];

    if (!icon) {
      console.warn(`Simple Icon not found: ${tool.id}`);
      return;
    }

    const badge = document.createElement("div");
    badge.innerHTML = badgeTemplate;
    badge.className = "flex gap-2 justify-center px-4 py-2 rounded-full origin-left";
    badge.style.opacity = 0;

    badge.querySelector("#icon").innerHTML = renderIcon(icon, 24);
    badge.querySelector("h1").textContent = icon.title;
    badge.style.backgroundColor = `#${icon.hex}`;
    badge.style.color = tool.bg === "light" ? "black" : "white";

    toolpanel.appendChild(badge);
    badges.push(badge);
  });

  // 👇 scroll trigger
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      // play animation when entering
      badges.forEach((badge, index) => {
        badge.animate(
          {
            opacity: [0, 1],
            transform: ["scaleX(0)", "scaleX(1)"]
          },
          {
            fill: "forwards",
            delay: index * 100,
            duration: 200,
            easing: "ease-in-out"
          }
        );
      });
    } else {
      // reset when leaving
      badges.forEach((badge) => {
        badge.getAnimations().forEach(anim => anim.cancel()); // stop active animations
        badge.style.opacity = 0;
        badge.style.transform = "scaleX(0)";
      });
    }
  },
  { threshold: 0.3 }
);

observer.observe(toolpanel);
});