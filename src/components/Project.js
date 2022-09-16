import React from "react";
import './Project.css';
import img1 from '../images/jssf.jpg';
import { SiVercel, SiGithub} from "react-icons/si";

function Project() {
    return (
        <div className="container">
            <div className="App">
                <div className="section2" id="project">
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
                            <div className="titleP">Cat</div>
                        </div>
                        <div className="P3">
                            <div className="titleP">Loness</div>
                        </div>
                        <div className="P4">
                            <div className="titleP">Depp</div>
                        </div>
                        <div className="P5">
                            <div className="titleP">Soles</div>
                        </div>
                        <div className="P6">
                            <div className="titleP">FAke</div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Project;