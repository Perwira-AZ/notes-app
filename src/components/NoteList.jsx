import React from 'react';
import NoteItem from './NoteItem';
import PropTypes from 'prop-types';

function NoteList({ notes }) {
    return (
        <section className="notes-list">
            {notes.map((note) => {
                return <NoteItem note={note} key={note.id} />;
            })}
        </section>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
