import React from "react";
import './Contato.css';
import Cv from "../images/CVLucasCarrilho.pdf";

function Contato() {
    return (
        <div className="containerContato" id="contato">
            <div className="App">
                <div className="sectionContato">
                    <h3 className="title">CONTATO</h3>
                    <div className="hold">
                        <div className="list">
                            <p> lucas.carrilho7@outlook.com | (31) 99795-3443</p>    
                        </div>
                    </div>
                    <div className="hold1">
                        <div className="list1">    
                            <a href="https://www.linkedin.com/in/lutece771/">LinkedIn</a>
                            <a href="https://github.com/L-Lutece">Github</a>
                            <a href={Cv} download>Currículo</a>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Contato;