import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'


export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('/sessions', { id });
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={event => setId(event.target.value)}
                    />
                    <button className="button" id="btn-entrar-logon" type="submit">Entrar</button>

                    <Link className="back-link" to="/Register">
                        <FiLogIn size={16} color="#F02041" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}