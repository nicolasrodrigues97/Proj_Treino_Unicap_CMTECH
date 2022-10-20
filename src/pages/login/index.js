import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

export default function Login() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const history = useNavigate();

    async function login(e) {
        e.preventDefault();

        const data = {
            userName,
            password,
        };

        try {
            const response = await api.post('api/auth/v1/signin', data);

            localStorage.setItem('userName', userName);
            localStorage.setItem('accessToken', response.data.accessToken);
            localStorage.setItem('refreshToken', response.data.refreshToken);

            history.push('/books');
        } catch (error) {
            alert('Login falhou! tente novamente.');
        }

    }

    return (
        <div className="login-container">
            <section className="form">
                <form onSubmit={login}>
                    <h1>Login de usuário</h1>

                    <input
                        placeholder="Usuário"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Login</button>
                </form>

            </section>

        </div>
    )

}