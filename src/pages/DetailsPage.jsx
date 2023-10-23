import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/network-data';
import NoteDetail from '../components/NoteDetail';
import DetailPageAction from '../components/DetailPageAction';

function DetailsPage() {
    const { id } = useParams();
    const [note, setNote] = React.useState({});

    React.useEffect(() => {
        getNote(id).then(({ data }) => {
            setNote(data);
        });
    }, []);

    return (
        <section className="detail-page">
            <NoteDetail note={note} />
            <DetailPageAction id={id} archived={note.archived} />
        </section>
    );
}

export default DetailsPage;
