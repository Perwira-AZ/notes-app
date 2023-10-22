import React from 'react';

function NoteDetail({ note }) {
    return (
        <>
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{note.createdAt}</p>
            <div className="detail-page__body">{note.body}</div>
        </>
    );
}

export default NoteDetail;
