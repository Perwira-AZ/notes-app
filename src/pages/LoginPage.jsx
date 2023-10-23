import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import PropTypes from 'prop-types';

function LoginPage({ login }) {
    const { locale } = React.useContext(AppContext);
    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    function onEmailChange(event) {
        setUser((prevState) => {
            return {
                ...prevState,
                email: event.target.value,
            };
        });
    }

    function onPasswordChange(event) {
        setUser((prevState) => {
            return {
                ...prevState,
                password: event.target.value,
            };
        });
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        login(user);
    }

    return (
        <section className="login-page">
            <h2>{locale === 'id' ? 'Yuk, login untuk menggunakan aplikasi.' : 'Login to use app, please.'}</h2>
            <form className="input-login" onSubmit={onSubmitHandler}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={onEmailChange} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={onPasswordChange} />
                <button>Login</button>
            </form>
            <p>
                {locale === 'id' ? 'Belum punya akun? ' : "Don't have an accout? "}
                <Link to="/register">{locale === 'id' ? 'Daftar di sini' : 'Register here'}</Link>
            </p>
        </section>
    );
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
};

export default LoginPage;
