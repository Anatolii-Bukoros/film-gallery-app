import React, { useState } from 'react';
import './App.css';
import { Carousel } from './components/Carousel';
import { CarouselData } from './components/Carousel/CarouselData';
import { Login } from './components/Login';
import { Register } from './components/Register';

function App() {
  const [currentForm, setCurrentForm] = useState('register');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return (
    <div className="container">
      {/* <Carousel images={CarouselData} /> */}
      <div className="auth-form">
        {
          currentForm === 'login'
            ? <Login onFormSwitch={toggleForm} />
            : <Register onFormSwitch={toggleForm} />
        }
      </div>
    </div>
  );
}

export default App;
