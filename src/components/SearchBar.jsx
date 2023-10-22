import React from 'react';

function SearchBar(search, defaultKeywords) {
    const [keyword, setKeyword] = React.useState(defaultKeywords || '');

    function onSearchInput(event) {
        setKeyword(event.target.value);
        console.log(keyword);
        search(keyword);
    }

    return (
        <section className="search-bar">
            <input type="text" placeholder="Cari berdasarkan judul..." value={keyword} onChange={onSearchInput} />
        </section>
    );
}

export default SearchBar;
