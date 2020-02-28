import React, { useState } from 'react';

const NoteApp = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState('');

    const addNote = (e) => {
        e.preventDefault();
            setNotes([
                ...notes,
                { title: title },
                {name: 'archana'},
                {age: 30}
            ])

            setTitle('')
    }
    return(
        <div>
            <h1>Notes</h1>
            <p>Add Note</p>
            {notes.map((note) => {
                console.log(note);
                return(
                <h2>{note.name}</h2>
                )
            })}
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <button>Add note</button>
            </form>
        </div>
    )
}
export default NoteApp;