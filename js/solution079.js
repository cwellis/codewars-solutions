const transpose = (song, interval) => {
    const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const notesF = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
     
    return song.map((note) => {
        let i = notes.indexOf(note);
        if (i == -1) i = notesF.indexOf(note);
        let j = (i + interval + 12) % 12;
        return notes[j]
    })    
}