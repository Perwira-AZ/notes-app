import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUserLogged, login, putAccessToken } from './utils/network-data';
import Header from './components/header';
import HomePage from './pages/HomePage';
import AddNewPage from './pages/AddNewPage';
import ArchivedPage from './pages/ArchivedPage';
import DetailsPage from './pages/DetailsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ErrorPage from './pages/ErrorPage';
import AppContext from './context/AppContext';

function App() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [initialization, setInitialization] = React.useState(true);
    const [theme, setTheme] = React.useState('dark');
    const [locale, setLocale] = React.useState('id');

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    };

    const toggleLocale = () => {
        setLocale((prevLocale) => {
            return prevLocale === 'id' ? 'en' : 'id';
        });
    };

    const contextValue = React.useMemo(() => {
        return {
            theme,
            toggleTheme,
            locale,
            toggleLocale,
        };
    }, [theme, locale]);

    React.useEffect(() => {
        getUserLogged().then(({ data }) => {
            setAuthedUser(data);
            setInitialization(false);
        });
    }, []);

    async function onLogin(user) {
        const response = await login(user);
        if (!response.error) {
            const { data } = await getUserLogged();
            setAuthedUser(() => {
                return { authedUser: data };
            });
            putAccessToken(response.data.accessToken);
        }
    }

    function onLogout() {
        setAuthedUser(null);
        putAccessToken('');
    }

    if (initialization) {
        return null;
    }
    return (
        <AppContext.Provider value={contextValue}>
            <div className="app-container" data-theme={theme}>
                <Header onLogout={onLogout} />
                <main>
                    {authedUser ? (
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/notes/new" element={<AddNewPage />} />
                            <Route path="/archives" element={<ArchivedPage />} />
                            <Route path="/notes/:id" element={<DetailsPage />} />
                            <Route path="*" element={<ErrorPage />} />
                        </Routes>
                    ) : (
                        <Routes>
                            <Route path="/*" element={<LoginPage login={onLogin} />} />
                            <Route path="/register" element={<RegisterPage />} />
                        </Routes>
                    )}
                </main>
            </div>
        </AppContext.Provider>
    );
}

export default App;
