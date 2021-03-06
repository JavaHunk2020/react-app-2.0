import React from 'react';
import logo from './img/logo.png';
import BoxContainer from './components/main/BoxContainer';
import './index.css';
import Header from './components/header/Header';

function App() {
  return (
    <div class="container">
            <div class="inner-container">
             <Header/>
              <div class="main">
                <div class="inner-main">
                  <h4>New Games and Accessories</h4>
                  <h1>Monthly Packages</h1>
                  <h1>Excitement delivered daily</h1>
                  <p>
                    what is the best way to shop for the latest video games{" "}
                    <br />
                    all peripehirals? How about never Shoping at all? <br />
                    you'll get new stuff on your doorstep-everymonth
                  </p>
                  <button class="btn">GET STARTED</button>
                </div>
              </div>
              <BoxContainer />
            </div>
          </div>
  );
}

export default App;
