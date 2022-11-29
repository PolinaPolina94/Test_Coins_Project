import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getCoinInfo } from "../../redux/coin-reducer";
import CoinInfo from "../Coin/CoinInfo";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addCoin } from "../../redux/portfolio-reducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class CoinInfoContainer extends React.Component {
  showCoinInfo() {
    let coinId = this.props.router.params.coinId;
    this.props.getCoinInfo(coinId);
  }

  componentDidMount() {
    this.showCoinInfo();
  }

  render() {
    return (
      <div>
        {" "}
        <CoinInfo
          coinInfo={this.props.coinInfo}
          addCoin={this.props.addCoin}
        />{" "}
      </div>
    );
  }
}



export default compose(
  connect( { getCoinInfo, addCoin }),
  withRouter
)(CoinInfoContainer);
