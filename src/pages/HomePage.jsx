import React from 'react';
import { Link } from 'react-router-dom';
import { getActiveNotes } from '../utils/network-data';
import AppContext from '../context/AppContext';
import NoteList from '../components/NoteList';

function HomePage() {
    const { locale } = React.useContext(AppContext);
    const [notes, setNotes] = React.useState([]);

    React.useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data);
        });
    }, []);

    return (
        <section className="homepage">
            <h2>{locale === 'id' ? 'Catatan Aktif' : 'Active Note'}</h2>
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
