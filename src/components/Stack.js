import React from "react";
import './Stack.css';
import { DiMysql, DiSass, DiLess, DiPython, DiDjango} from "react-icons/di";
import { DiTerminal, DiReact, DiCss3, DiJavascript1, DiNodejsSmall, DiBootstrap, DiKrakenjsBadge, DiVisualstudio, DiPostgresql} from "react-icons/di";
import { DiHtml5, DiGit, DiGithubBadge, DiNpm, DiJqueryLogo} from "react-icons/di";
import { SiFlask } from "react-icons/si";

function Stack() {

    return (
        <div className="containerStack">
            <div className="App">
                <div className="sectionStack" id="stack">
                    <h3 className="title_stack">STACK</h3>
                    <div className="fManager">
                        <div className="fContainer">
                            <div className="stackTextArea">
                                <div className="stackText">
                                    <h4>Básico</h4>
                                    <p>Aqui são tecnologias que conheci brevemente e tive pouco contato.</p>
                                </div>
                                <div className="stackTextS">
                                    <h4>Avançado</h4>
                                    <p>Tecnologias que tenho um conhecimento otimo, e sempre faço uso em meus projetos.</p>
                                </div>
                            </div>
                            <div className="fBlock">
                                <DiMysql color="blue" title="MySql" fontSize={100} id="icon"/>
                                <DiSass color="pink" title="Sass" fontSize={100} id="icon"/>
                                <DiLess color="blue" title="Less" fontSize={100} id="icon"/>
                                <DiPython color="yellow" title="Python" fontSize={100} id="icon"/>
                                <DiDjango color="green" title="Django" fontSize={100} id="icon"/>
                            </div>
                            <div className="sBlock">
                                <DiHtml5 color="#f56008" title="Html" fontSize={100} id="icon"/>
                                <DiGit color="#f56008" title="Git" fontSize={100} id="icon"/>
                                <DiGithubBadge color="black" title="Github" fontSize={100} id="icon"/>
                                <DiNpm color="#be2f3c" title="NPM" fontSize={100} id="icon"/>
                                <DiJqueryLogo color="#307cc6" title="jQuery" fontSize={100} id="icon"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="fManager">
                        <div className="sContainer">
                            <div className="stackTextAreaS">
                                <div className="stackTextT">
                                    <h4>Intermediário</h4>
                                    <p>São tecnologias que uso bastante e tenho um conhecimento OK, mas realizo consultas para usar.</p>
                                </div>
                            </div>
                            <div className="tBlock">
                                <DiTerminal color="black" title="CMD" fontSize={100} id="icon"/>
                                <DiReact color="#a6d6ff" title="React.js" fontSize={100} id="icon"/>
                                <DiCss3 color="blue" title="Css" fontSize={100} id="icon"/>
                                <DiJavascript1 color="yellow" title="JavaScript" fontSize={100} id="icon"/>
                                <DiNodejsSmall color="green" title="Node.js" fontSize={100} id="icon"/>
                                <DiBootstrap color="#8f12c3" title="Bootstrap" fontSize={100} id="icon"/>
                                <DiKrakenjsBadge color="#2285da" title="Git Kraken" fontSize={100} id="icon"/>
                                <DiVisualstudio color="blue" title="VisualStudio" fontSize={100} id="icon"/>
                                <DiPostgresql color="#4a44be" title="Postgree" fontSize={100} id="icon"/>
                                <SiFlask color="black" title="Flask" fontSize={90} id="icon"/>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stack;