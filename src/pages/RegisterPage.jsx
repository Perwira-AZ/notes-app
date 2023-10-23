import React from 'react';
import { Link } from 'react-router-dom';
import { register } from '../utils/network-data';
import AppContext from '../context/AppContext';

function RegisterPage() {
    const { locale } = React.useContext(AppContext);
    const [user, setUser] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    function onNameChangeHandler(event) {
        setUser((prevState) => {
            return {
                ...prevState,
                name: event.target.value,
            };
        });
    }

    function onEmailChangeHandler(event) {
        setUser((prevState) => {
            return {
                ...prevState,
                email: event.target.value,
            };
        });
    }

    function onPasswordChangeHandler(event) {
        setUser((prevState) => {
            return {
                ...prevState,
                password: event.target.value,
            };
        });
    }

    async function onSubmitHandler(event) {
        event.preventDefault();
        if (document.getElementById('confirmPassword').value !== user.password) {
            alert('Confirm password did not match!');
        } else {
            register(user);
        }
    }

    return (
        <section className="register-page">
            <h2>{locale === 'id' ? 'Isi form untuk mendaftar akun.' : 'Fill the form to register account.'}</h2>
            <form className="input-register" onSubmit={onSubmitHandler}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={onNameChangeHandler} />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" onChange={onEmailChangeHandler} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={onPasswordChangeHandler} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" />
                <button>Register</button>
            </form>
            <p>
                {locale === 'id' ? 'Sudah punya akun? ' : 'Already have an account? '}
                <Link to="/">{locale === 'id' ? 'Login di sini' : 'Login here'}</Link>
            </p>
        </section>
    );
}

export default RegisterPage;
