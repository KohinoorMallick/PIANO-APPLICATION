const keys = document.querySelectorAll('.key');
const notes = {
    'C': 'sounds/C.mp3',
    'C#': 'sounds/C_sharp.mp3',
    'D': 'sounds/D.mp3',
    'D#': 'sounds/D_sharp.mp3',
    'E': 'sounds/E.mp3',
    'F': 'sounds/F.mp3',
    'F#': 'sounds/F_sharp.mp3',
    'G': 'sounds/G.mp3',
    'G#': 'sounds/G_sharp.mp3',
    'A': 'sounds/A.mp3',
    'A#': 'sounds/A_sharp.mp3',
    'B': 'sounds/B.mp3',
    'C2': 'sounds/C2.mp3'
};

keys.forEach(key => {
    key.addEventListener('mousedown', () => playNoteByKey(key));
});

document.addEventListener('keydown', e => {
    const key = e.key.toUpperCase();
    const note = getNoteFromKey(key);
    if (note) playNoteByKey(note);
});

function playNoteByKey(note) {
    const keyElement = document.querySelector(`[data-note="${note}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        playNoteAudio(note);
        setTimeout(() => keyElement.classList.remove('active'), 200);
    }
}

function playNoteAudio(note) {
    const audio = new Audio(notes[note]);
    audio.currentTime = 0;
    audio.play();
}

function getNoteFromKey(key) {
    switch (key) {
        case 'A': return 'C';
        case 'W': return 'C#';
        case 'S': return 'D';
        case 'E': return 'D#';
        case 'D': return 'E';
        case 'F': return 'F';
        case 'T': return 'F#';
        case 'G': return 'G';
        case 'Y': return 'G#';
        case 'H': return 'A';
        case 'U': return 'A#';
        case 'J': return 'B';
        case 'K': return 'C2';
        default: return null;
    }
}
