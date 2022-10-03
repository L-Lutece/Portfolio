import React from "react";
import './Project.css';
import img1 from '../images/jssf.jpg';
import { SiVercel, SiGithub} from "react-icons/si";

function Project() {
    return (
        <div className="containerProject" id="project">
            <div className="App">
                <div className="sectionProject">
                    <h3 className="title">PROJETOS</h3>
                    <div className="PAll">
                        <div className="P1">
                            <div className="titleP1">Relógio com JS</div>
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
                            <div className="titleP"></div>
                            <div className="containerIcon">
                                <div className="icons1">
                                    <h6>EM ANDAMENTO</h6>
                                </div>
                            </div>
                        </div>
                        <div className="P4">
                            <div className="titleP"></div>
                            <div className="containerIcon">
                                <div className="icons1">
                                    <h6>EM ANDAMENTO</h6>
                                </div>
                            </div>
                        </div>
                        <div className="P5">
                            <div className="titleP"></div>
                            <div className="containerIcon">
                                <div className="icons1">
                                    <h6>EM ANDAMENTO</h6>
                                </div>
                            </div>
                        </div>
                        <div className="P6">
                            <div className="titleP"></div>
                            <div className="containerIcon">
                                <div className="icons1">
                                    <h6>EM ANDAMENTO</h6>
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