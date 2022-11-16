import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import Table from './components/Table/Table';
import CoinInfoPage from './components/Coin/CoinInfoPage';



function App() {

  const [coins, setCoins] = useState([]);

  useEffect(() => {
      const getCoins = async () => {
          let response = await axios.get('https://api.coincap.io/v2/assets')
          setCoins(response.data.data);
      }
      getCoins();
  }, [])
  
  // let coinID = coins.map(coin => coin.id);
  // console.log(coinID);
  return (
   
    <div className="App">

      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Table coins={coins} />} />
            
            <Route path=":coinID" element={<CoinInfoPage coins={coins}/>} />
            
            {/* <Route path="*" element={<h2>Ресурс не найден</h2>} /> */}
          </Routes>
        </BrowserRouter>
        
      </div>

    </div>
  );
}

export default App;
