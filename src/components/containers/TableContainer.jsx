import React from "react";
import { connect } from "react-redux";
import Table from "../Table/Table";
import { getCoins } from "../../redux/coin-reducer";
import { addCoin } from "../../redux/portfolio-reducer";
import { showModal } from "../../redux/modal-reducer";

class TableContainer extends React.Component {
  componentDidMount() {
    this.props.getCoins();
  }

  render() {
    return (
      <>
        <Table coins={this.props.coins} addCoin={this.props.addCoin} showModal={this.props.showModal}/>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins.coins,
  };
};

export default connect(mapStateToProps, { getCoins, addCoin, showModal })(TableContainer);
