import React from 'react';
import AppContext from '../context/AppContext';
import { addNote } from '../utils/network-data';
import { useNavigate } from 'react-router-dom';

function AddNewPage() {
    const { locale } = React.useContext(AppContext);
    const navigate = useNavigate();
    const [note, setNote] = React.useState({
        title: '',
        body: '',
    });

    function onTitleChange(event) {
        setNote((prevState) => {
            return {
                ...prevState,
                title: event.target.value,
            };
        });
    }

    function onBodyChange(event) {
        setNote((prevState) => {
            return {
                ...prevState,
                body: event.target.value,
            };
        });
    }

    async function onAddNewNote() {
        addNote(note);
        navigate('/');
    }

    return (
        <form className="add-new-page" onSubmit={onAddNewNote}>
            <div className="add-new-page__input">
                <input
                    type="text"
                    className="add-new-page__input__title"
                    placeholder={locale === 'id' ? 'Masukkan judul catatan...' : 'Enter note title...'}
                    onChange={onTitleChange}
                />
                <textarea
                    className="add-new-page__input__body"
                    placeholder={locale === 'id' ? 'Masukkan catatan...' : 'Enter note...'}
                    onChange={onBodyChange}
                ></textarea>
            </div>
            <div className="add-new-page__action">
                <button className="action" type="submit">
                    &#10003;
                </button>
            </div>
        </form>
    );
}

export default AddNewPage;
