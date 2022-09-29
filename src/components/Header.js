import React from 'react';
import './Header.css'

function Header() {
    return (
    <div className="containerHeader">
        <div className="Header">
            <div className="items">
                <a href="#stack">STACK</a>
                <a href="#project">PROJETOS</a>
                <a href="#xp">EXPERIÊNCIA</a>
                <a href="#contato">CONTATO</a>
            </div>
        </div>
    </div>
    );
}

export default Header;