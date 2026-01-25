function reload(){
    let techstack = document.getElementById('exp-techstack');

    fetch('data/experience.json').then(res => res.json()).then(data => {
        let stack = data;
        stack.forEach(element => {
            fetch('components/badges.html').then(res => res.text()).then(badge => {
                let comp = document.createElement('div');
                comp.className = "flex gap-2 border px-4 py-2 rounded-full";
                comp.innerHTML = badge;

                const img = comp.querySelector('img');
                const title = comp.querySelector('h1');

                title.textContent = element.name;

                img.src = `https://cdn.simpleicons.org/${element.id}/white`;
                img.onerror = () => {
                  // Skip icon if 404 (or any load error)
                  img.remove();
                };

                techstack.appendChild(comp);

            });
        });
    });
}

reload();