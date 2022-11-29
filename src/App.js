import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
// import Modal from "./components/Modal/Modal";
import Table from "./components/Table/Table";
import Portfolio from "./components/Portfolio/Portfolio";
import CoinInfo from "./components/Coin/CoinInfo";

function App() {
  return (
    <div className="App">
      <div>
        <HashRouter>
          <Header />
          {/* <Modal /> */}
          <Routes>
            <Route exact path="/" element={<Table />} />
            <Route exact path="/:coinId" element={<CoinInfo />} />
            <Route exact path="/portfolio" element={<Portfolio />} />
          </Routes>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
