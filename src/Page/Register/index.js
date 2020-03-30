import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import LogoImg from '../../assets/logo.svg'


export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try {
            const response = await api.post('/ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/')
        } catch (err) {
            alert('Erro no cadastro, tente novament');
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={LogoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#F02041" />
                        Não tenho cadastro
                    </Link>

                </section>

                <form onSubmit={handleRegister}>

                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        maxLength="100"
                        onChange={event => setName(event.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        maxLength="100"
                        onChange={event => setEmail(event.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="WhatsApp"
                        maxLength="15"
                        value={whatsapp}
                        onChange={event => setWhatsapp(event.target.value)}
                    />

                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Cidade"
                            maxLength="100"
                            value={city}
                            onChange={event => setCity(event.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="UF" style={{ width: 50 }}
                            maxLength="2"
                            value={uf}
                            onChange={event => setUf(event.target.value)}
                        />
                    </div>

                    <button className="button" id="btn-register" type="submit">Cadastrar</button>

                </form>
            </div>
        </div>
    )
}