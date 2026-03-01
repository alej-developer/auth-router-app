import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkCredentials } from '../services/authService';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (checkCredentials(email, password)) {
            navigate('/welcome');
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}