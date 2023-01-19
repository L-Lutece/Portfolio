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
                                    <a href="https://restaurant-interface.vercel.app/" className="link"><SiVercel size={35}/></a>
                                </button>
                                <button className="button-23">
                                    <a href="https://github.com/L-Lutece/restaurant-interface" className="link"><SiGithub size={35}/></a>
                                </button>
                            </div>
                        </div>

                        <div className="block_3">
                            <div className="title_block">
                                <h4>Primeiro site restaurant</h4>
                            </div>    
                            <div className="image_block">
                                <video src="./images/video1.mp4" controls></video>
                            </div>
                            <div className="area">
                                <button className="button-23">
                                    <a href="https://luteceweb.neocities.org/" className="link"><SiVercel size={35}/></a>
                                </button>
                                <button className="button-23">
                                    <a href="https://github.com/L-Lutece/neoCities" className="link"><SiGithub size={35}/></a>
                                </button>
                            </div>
                        </div>

                        <div className="block_4">
                            <div className="title_block">
                                <h4>Lance</h4>
                            </div>    
                            <div className="image_block">
                                <video src="./images/video1.mp4" controls></video>
                            </div>
                            <div className="area">
                                <button className="button-23">
                                    <a href="#" className="link"><SiVercel size={35}/></a>
                                </button>
                                <button className="button-23">
                                    <a href="https://github.com/L-Lutece/Lance" className="link"><SiGithub size={35}/></a>
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