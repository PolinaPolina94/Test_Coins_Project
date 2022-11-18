import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
// import Table from './components/Table/Table';
import TableContainer from './components/Table/TableContainer';
import CoinInfoContainer from './components/Coin/CoinInfoContainer';


function App() {

  return (
   
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<TableContainer/>} />
            <Route path="/:coinId" element={<CoinInfoContainer />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
