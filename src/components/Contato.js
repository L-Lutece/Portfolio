import React from "react";
import './Contato.css';
import Cv from "../images/CurriculoLucasCarrilho.pdf";

function Contato() {
    return (
        <div className="containerContato" id="contato">
            <div className="App">
                <div className="sectionContato">
                        <div className="list_contact">
                            <h4> lucas.carrilho7@outlook.com | (31) 99795-3443</h4>    
                        </div>
                        <div className="atr_name">
                            <h4>Desenvolvido por Lucas Carrilho</h4>
                        </div>
                    <div className="hold1">
                        <div className="list1">    
                            <a href="https://www.linkedin.com/in/lucas-desenvolvedor-python/">LinkedIn</a>
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