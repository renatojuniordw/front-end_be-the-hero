import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImg} alt="Be The Hero" />

                <form>
                    <input placeholder="Sua ID" />
                    <button className="button" type="submit">Entrar</button>

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