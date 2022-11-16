import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

import CoinInfo from "./CoinInfo";


function CoinInfoPage(props) {

// const {coinID} = useParams()

const params = useParams()
const coinID = params.coinID;
// const coinID = params.id;
console.log(coinID);

const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
      const getCoinsInfo = async () => {
          let response = await axios.get(`https://api.coincap.io/v2/assets/${coinID}`)
          setCoinInfo(response.data.data);
      }
      getCoinsInfo();
  }, [coinID])

   return (

      <div>   
         <CoinInfo coinInfo={coinInfo}></CoinInfo>
      </div>
      
   )
   
};

export default CoinInfoPage; 