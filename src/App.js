import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
// import Table from './components/Table/Table';
import TableContainer from "./components/Table/TableContainer";
import CoinInfoContainer from "./components/Coin/CoinInfoContainer";
import Portfolio from "./components/Portfolio/Portfolio";
import MyPostContainer from "./components/Portfolio/PortfolioContainer";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<TableContainer />} />
            <Route path="/:coinId" element={<CoinInfoContainer />} />
            <Route exact path="/portfolio" element={<MyPostContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
