import React from 'react';
import { getArchivedNotes } from '../utils/network-data';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';

function ArchivedPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { locale } = React.useContext(AppContext);
    const activeKeyword = searchParams.get('title') || '';
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getArchivedNotes(activeKeyword).then(({ data }) => {
            setNotes(data);
        });
    }, [activeKeyword]);

    function changeSearchParamas(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <section className="archives-page">
            <h2>{locale === 'id' ? 'Catatan Arsip' : 'Archived Note'}</h2>
            <SearchBar search={changeSearchParamas} defaultKeywords={activeKeyword} />
            {notes.length ? <NoteList notes={notes} /> : <p className="notes-list-empty">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>}
        </section>
    );
}

export default ArchivedPage;
