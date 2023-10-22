import React from 'react';
import { getArchivedNotes } from '../utils/network-data';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import NoteList from '../components/NoteList';

function ArchivedPage() {
    const { locale } = React.useContext(AppContext);
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getArchivedNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    return (
        <section className="archives-page">
            <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
            {notes.length ? <NoteList notes={notes} /> : <p className="notes-list-empty">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>}
        </section>
    );
}

export default ArchivedPage;
