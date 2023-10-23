import React from 'react';
import { Link } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import AppContext from '../context/AppContext';
import SearchBar from '../components/SearchBar';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const { locale } = React.useContext(AppContext);
    const activeKeyword = searchParams.get('title') || '';
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getActiveNotes(activeKeyword).then(({ data }) => {
            setNotes(data);
        });
    }, [activeKeyword]);

    function changeSearchParamas(keyword) {
        setSearchParams({ title: keyword });
    }

    return (
        <section className="homepage">
            <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
            <SearchBar search={changeSearchParamas} defaultKeywords={activeKeyword} />
            {notes.length ? <NoteList notes={notes} /> : <p className="notes-list-empty">{locale === 'id' ? 'Tidak ada catatan' : 'No notes'}</p>}
            <div className="homepage__action">
                <Link to="/notes/new">
                    <button className="action">+</button>
                </Link>
            </div>
        </section>
    );
}

export default HomePage;
