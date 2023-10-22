import React from 'react';
import { Link } from 'react-router-dom';

function NoteItem({ note }) {
    return (
        <div className="note-item">
            <h3 className="note-item__title">
                <Link to={`/notes/${note.id}`}>{note.title}</Link>
            </h3>
            <p className="note-item__createdAt">{note.createdAt}</p>
            <p className="note-item__body">{note.body}</p>
        </div>
    );
}

export default NoteItem;
