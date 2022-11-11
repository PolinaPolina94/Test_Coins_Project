import './App.css';
import Main from './components/Main/Main';
import CoinInfoPage from './components/Coin/CoinInfoPage';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';


function App() {
  return (
    <div className="App">

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/:name' element={<CoinInfoPage/>} />
            {/* <Route path="*" element={<div> Error 404  O-O-O-PS, something wrong. Don't know about this page :( </div>}/>  */}
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
