
var playbuttons = document.querySelectorAll('.playbutton');

function TriggerButton(event) {
    var element = event.target;
    if (element.className.includes('fa-play')) {
        element.className = element.className.replace('fa-play', 'fa-pause');
    } else {
        element.className = element.className.replace('fa-pause', 'fa-play');
    }
}

playbuttons.forEach(button => {
    button.addEventListener('click', TriggerButton);
});
