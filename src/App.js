import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
// import Table from './components/Table/Table';
import TableContainer from "./components/Table/TableContainer";
import CoinInfoContainer from "./components/Coin/CoinInfoContainer";
import PortfolioContainer from "./components/Portfolio/PortfolioContainer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/" element={<TableContainer />} />
            <Route exact path="/:coinId" element={<CoinInfoContainer />} />
            <Route exact path="/portfolio" element={<PortfolioContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
