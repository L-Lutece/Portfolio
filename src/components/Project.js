import React from "react";
import './Project.css';
import { SiVercel, SiGithub} from "react-icons/si";
import Video from "../images/Strands-video.mp4";
import Videoc from "../images/cloack.mp4";

function Project() {
    return (
        <div className="containerProject" id="project">
            <div className="App">
                <div className="sectionProject">
                    <h3 className="title">PROJETOS</h3>
                    <div className="explain_icons_area">
                        <p>Para ter uma melhor interação com os projetos dessa sessão, você pode apertar no ícone do “Vercel” <SiVercel size={20}></SiVercel>  para vizualizar o projeto em sua maquina, ou no ícone do “Github” <SiGithub size={20}></SiGithub>  para navegar pelo código fonte, historico de commits e outros... </p>
                    </div>
                    <div className="sovt_project">
                        
                        <div className="block_1">
                            <div className="title_block">
                                <h4>Browser-api's</h4>
                            </div>    
                            
                            <div className="image_block">
                                <video src={Video} controls/>
                            </div>
                            <div className="area">
                                <button className="button-23">
                                    <a href="https://browser-apis-gjza.vercel.app/" className="link"><SiVercel size={35}/></a>
                                </button>
                                <button className="button-23">
                                    <a href="https://github.com/L-Lutece/browser-apis" className="link"><SiGithub size={35}/></a>
                                </button>
                            </div>
                        </div>

                        <div className="block_2">
                            <div className="title_block">
                                <h4>Relógio com JavaScript</h4>
                            </div>    
                            <div className="image_block">
                                <video src={Videoc} controls/>
                            </div>
                            <div className="area">
                                <button className="button-23">
                                    <a href="https://jsc-loack.vercel.app/" className="link"><SiVercel size={35}/></a>
                                </button>
                                <button className="button-23">
                                    <a href="https://github.com/L-Lutece/JSCloack" className="link"><SiGithub size={35}/></a>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Project;