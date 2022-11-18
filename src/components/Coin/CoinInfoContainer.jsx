import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoinInfo } from "../../redux/coin-reduser";
import CoinInfo from "./CoinInfo";
import { useLocation, useNavigate, useParams } from "react-router-dom";


function withRouter(Component) {
   function ComponentWithRouterProp(props) {
       let location = useLocation();
       let navigate = useNavigate();
       let params = useParams();
       return (
           <Component
               {...props}
               router={{ location, navigate, params }}
           />
       );
   }
   return ComponentWithRouterProp;
}


class CoinInfoContainer extends React.Component {

   updateProfile() {
      let coinId = this.props.router.params.coinId;
      this.props.getCoinInfo(coinId);
  }

componentDidMount () {
   this.updateProfile()
}

render () {

   return (
      
<div> <CoinInfo coinInfo={this.props.coinInfo}/>  </div> 
  
   )
}
      
};

const mapStateToProps = (state) => {
   return {
      coins: state.coins.coins,
      coinInfo: state.coins.coinInfo
   }
}

export default compose (connect(mapStateToProps, {getCoinInfo}) , withRouter) (CoinInfoContainer); 







// const {coinID} = useParams()

// const params = useParams()
// const coinID = params.coinID;
// // const coinID = params.id;
// console.log(coinID);

// const [coinInfo, setCoinInfo] = useState([]);

//   useEffect(() => {
//       const getCoinsInfo = async () => {
//           let response = await axios.get(`https://api.coincap.io/v2/assets/${coinID}`)
//           setCoinInfo(response.data.data);
//       }
//       getCoinsInfo();
//   }, [coinID])