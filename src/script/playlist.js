var playbuttons = document.querySelectorAll('.playbutton');
let currentAudio = null;
let currentButton = null;

function TriggerButton(event) {
    var element = event.target;
    const audioPath = element.getAttribute('data-audio');

    //console.log("Clicked button:", element);
    //console.log("Audio path:", audioPath);

    // If the clicked button is already the current one
    if (currentButton === element) {
        if (currentAudio && !currentAudio.paused) {
            //console.log("Pausing current audio.");
            currentAudio.pause();
            element.className = element.className.replace('fa-pause', 'fa-play');
        } else {
            //console.log("Resuming current audio.");
            currentAudio.play();
            element.className = element.className.replace('fa-play', 'fa-pause');
        }
    } else {
        // Stop the current audio
        if (currentAudio) {
            //console.log("Stopping current audio.");
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentButton) {
                currentButton.className = currentButton.className.replace('fa-pause', 'fa-play');
            }
        }

        // Set up the new audio
        //console.log("Setting up new audio:", audioPath);
        currentAudio = new Audio(audioPath);
        currentButton = element;

        // Play the new audio
        currentAudio.play();
        element.className = element.className.replace('fa-play', 'fa-pause');

        // Reset button when the audio ends
        currentAudio.addEventListener('ended', () => {
            //console.log("Audio ended:", audioPath);
            element.className = element.className.replace('fa-pause', 'fa-play');
            currentAudio = null;
            currentButton = null;
        });
    }
}

playbuttons.forEach(button => {
    button.addEventListener('click', TriggerButton);
});
