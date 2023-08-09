import React from 'react';
import './Header.css'

function Header() {
    return (
    <div className="containerHeader">
        <div className="Header">
            <div className="items">
                <a href="#stack" id='link_header'>STACK</a>
                <a href="#project" id='link_header'>PROJETOS</a>
                <a href="#xp" id='link_header'>EXPERIÊNCIA</a>
                <a href="#contato" id='link_header'>CONTATO</a>
            </div>
        </div>
    </div>
    );
}

export default Header;