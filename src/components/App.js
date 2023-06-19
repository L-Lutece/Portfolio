import React from 'react';
import './App.css';
import phone from '../images/phone.png'


function App() {
  return (
    <div clasName="containerApp">
      <div className="App">
        <div className="sectionApp">
          <h3 className="name">Lucas Carrilho</h3>
          <p className="description">Desenvolvedor Full-Stack Python</p> 
          <div className='logo'>
          </div>
          <div className='text_phone'>
            <h3>Nesse site existe uma aplicação para dispositivos Mobile! confira.</h3>
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
