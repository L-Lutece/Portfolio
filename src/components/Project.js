import React from "react";
import './Project.css';
import { SiVercel, SiGithub} from "react-icons/si";

function Project() {
    return (
        <div className="containerProject" id="project">
            <div className="App">
                <div className="sectionProject">
                    <h3 className="title">PROJETOS</h3>
                    <div className="grid">
                        <div className="gridOne">
                            <div className="P1">
                                <div className="titleP">Relógio com JS</div>
                                <div className="containerIcon">
                                    <div className="icons">
                                        <a href='https://jsc-loack-l-lutece.vercel.app/'><SiVercel size={40}/></a>
                                        <a href='https://github.com/L-Lutece/JSCloack'><SiGithub size={40}/></a>
                                    </div>
                                </div>
                            </div> 
                            <div className="P2">
                                <div className="titleP">Primeiro site</div>
                                <div className="containerIcon">
                                    <div className="icons">
                                        <a href="https://restaurant-interface.vercel.app/"><SiVercel size={40}/></a>
                                        <a href="https://github.com/L-Lutece/restaurant-interface"><SiGithub size={40}/></a>
                                    </div>
                                </div>
                            </div> 
                            <div className="P3">
                                <div className="titleP">NeoCities</div>
                                <div className="containerIcon">
                                    <div className="icons">
                                        <a href="https://luteceweb.neocities.org/"><SiVercel size={40}/></a>
                                        <a href="https://github.com/L-Lutece/neoCities"><SiGithub size={40}/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="gridTwo">
                            <div className="P4">
                                <div className="titleP">Lance</div>
                                <div className="containerIcon">
                                    <div className="icons">
                                        <a href=""><SiVercel size={40}/></a>
                                        <a href="https://github.com/L-Lutece/Lance"><SiGithub size={40}/></a>
                                    </div>
                                </div>
                            </div>
                            <div className="P5">
                            <div className="titleP">EM ANDAMENTO</div>
                            <div className="containerIcon">
                                <div className="icons1">
                                    
                                </div>
                            </div>
                            </div>
                            <div className="P6">
                                <div className="titleP">EM ANDAMENTO</div>
                                <div className="containerIcon">
                                    <div className="icons1">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;