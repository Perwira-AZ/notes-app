import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes }) {
    return (
        <section className="notes-list">
            {notes.map((note) => {
                return <NoteItem note={note} key={note.id} />;
            })}
        </section>
    );
}

export default NoteList;
