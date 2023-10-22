import React from 'react';
import { FaTrash } from 'react-icons/fa6';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { archiveNote } from '../utils/network-data';
import { unarchiveNote } from '../utils/network-data';
import { deleteNote } from '../utils/network-data';

function DetailPageAction({ id, archived }) {
    const navigate = useNavigate();

    async function archiveAction() {
        if (archived) {
            await unarchiveNote(id);
            navigate('/archives');
        } else {
            await archiveNote(id);
            navigate('/');
        }
    }

    async function deleteAction() {
        await deleteNote(id);
        if (archived) {
            navigate('/archives');
        } else {
            navigate('/');
        }
    }

    return (
        <div className="detail-page__action">
            <button className="action" onClick={archiveAction}>
                {archived ? <BiArchiveOut /> : <BiArchiveIn />}
            </button>
            <button className="action" onClick={deleteAction}>
                <FaTrash />
            </button>
        </div>
    );
}

export default DetailPageAction;
