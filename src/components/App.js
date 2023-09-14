import React from 'react';
import './App.css';
import phone from '../images/phone.png'


function App() {
  return (
    <div clasName="containerApp">
      <div className="App">
        <div className="sectionApp">
          <div className='mobile_text_form1'></div>
          <div className='mobile_text_form2'></div>
          <h3 className='mobile_e'>Você pode tambem acessar a versão mobile desse site!</h3>
          <h3 className='mobile_p'>Você pode tambem acessar a versão mobile desse site!</h3>
          <h3 className="name">Lucas Carrilho</h3>
          <p className="description">Desenvolvedor Full-Stack Python</p> 
          <div className='logo'>
          </div>
          <div className='phone'>
            <img src={phone} width='100%' height='100%'></img>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
