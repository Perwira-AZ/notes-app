import React from 'react';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';

function SearchBar({ search, defaultKeywords }) {
    const { locale } = React.useContext(AppContext);
    const [keyword, setKeyword] = React.useState(defaultKeywords || '');

    function onSearchInput(event) {
        const word = event.target.value;
        setKeyword(word);
    }

    React.useEffect(() => {
        search(keyword);
    }, [keyword]);

    return (
        <section className="search-bar">
            <input type="text" placeholder={locale === 'id' ? 'Cari berdasarkan judul...' : 'Find by Title...'} value={keyword} onChange={onSearchInput} />
        </section>
    );
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired,
    defaultKeywords: PropTypes.string,
};

export default SearchBar;
