import React from "react";
import './SideBar.css';
import Cv from "../images/CurriculoLucasCarrilho.pdf";
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

function SideBar() {
    return (
        <div className='containerSideBar'>
            <div className='SideBar'>
                <a href='https://www.linkedin.com/in/lucas-desenvolvedor-python/'><BsLinkedin size={35}/></a>
                <a href='https://github.com/L-Lutece'><BsGithub size={35}/></a>
                <a href={Cv} download title="Currículo"><FaClipboardList size={35}/></a>
            </div>
        </div>
    )
 }

export default SideBar;