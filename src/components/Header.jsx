import React from 'react';
import { CiLight, CiDark } from 'react-icons/ci';
import { BsTranslate } from 'react-icons/bs';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';

function Header({ onLogout }) {
    const { theme, toggleTheme, locale, toggleLocale } = React.useContext(AppContext);

    return (
        <header>
            <h1>
                <Link to="/">{locale === 'id' ? 'Aplikasi Catatan' : 'Notes App'}</Link>
            </h1>
            <nav className="navigation">
                <ul>
                    <li>
                        <Link to="/archives">{locale === 'id' ? 'Terarsip' : 'Archived'}</Link>
                    </li>
                </ul>
            </nav>
            <button className="toggle-locale" onClick={toggleLocale}>
                <BsTranslate />
            </button>
            <button className="toggle-theme" onClick={toggleTheme}>
                {theme === 'dark' ? <CiLight /> : <CiDark />}
            </button>
            <button className="button-logout" onClick={onLogout}>
                <HiOutlineLogout />
            </button>
        </header>
    );
}

Header.PropTypes = {
    onLogout: PropTypes.func.isRequired,
};

export default Header;
