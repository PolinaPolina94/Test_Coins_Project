import { connect } from "react-redux";
import Portfolio from "./Portfolio";
import { addCoin } from "../../redux/portfolio-reducer";

const mapStateToProps = (state) => {
  return {
    coins: state.coins.coins,
    listOfMyCoins: state.portfolio.listOfMyCoins,
  };
};

const PortfolioContainer = connect(mapStateToProps, { addCoin })(Portfolio);

export default PortfolioContainer;
