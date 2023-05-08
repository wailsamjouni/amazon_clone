import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')

            })
            .catch(error => alert(error.message));

    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')


            })
            .catch(error => alert(error.message));
    }

    return (
        <div className='login'>
            <img
                className='login__logo'
                src="https://api.freelogodesign.org/assets/blog/img/20180911090509731amazon_logo_RGB.jpg"
                alt=""
            />
            <div className="login_container">
                <h1>Anmelden</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        type="email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                    />
                    <button
                        className='login__sign'
                        type='submit'
                        onClick={login}
                    >
                        Weiter
                    </button>
                </form>
                <p>
                    Mit der Anmeldung erklären Sie sich mit den
                    Nutzungs- und Verkaufsbedingungen von Amazon
                    einverstanden. Bitte beachten Sie unseren
                    Datenschutzhinweis, unseren Hinweis zu Cookies
                    und unseren Hinweis zu interessenbezogener Werbung.
                </p>
                <button
                    onClick={register}
                    className='login_register'
                >
                    Dein Amazon Konto erstellen
                </button>
            </div>
        </div>
    )
}

export default Login