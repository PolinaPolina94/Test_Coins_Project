import React from 'react';
import { connect } from 'react-redux';
import Table from './Table';
import { getCoins } from '../../redux/coin-reduser';


class TableContainer extends React.Component {

    componentDidMount() {

        this.props.getCoins(); 

    }

    render() {
        return <>
            
            <Table 
                coins={this.props.coins}
            />

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        coins: state.coins.coins
    }
}


export default connect(mapStateToProps, {getCoins})(TableContainer);