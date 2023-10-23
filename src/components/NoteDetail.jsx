import React from 'react';
import { showFormattedDate } from '../utils/date';
import PropTypes from 'prop-types';

function NoteDetail({ note }) {
    const formattedDate = showFormattedDate(note.createdAt);
    return (
        <>
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{formattedDate}</p>
            <div className="detail-page__body">{note.body}</div>
        </>
    );
}

NoteDetail.propTypes = {
    note: PropTypes.object.isRequired,
};

export default NoteDetail;
