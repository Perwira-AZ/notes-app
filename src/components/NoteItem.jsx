import React from 'react';
import { showFormattedDate } from '../utils/date';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function NoteItem({ note }) {
    const formattedDate = showFormattedDate(note.createdAt);
    return (
        <div className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h3>
            <p className="note-item__createdAt">{formattedDate}</p>
            <p className="note-item__body">{note.body}</p>
        </div>
    );
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
};

export default NoteItem;
