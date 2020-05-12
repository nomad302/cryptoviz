import React from "react";
import { connect } from "react-redux";
import { fetchHistoricalData } from "../actions";

class CoinDetails extends React.Component {
  componentDidMount() {
    this.props.fetchHistoricalData(this.props.match.params.coin);
  }

  render() {
    return <div>Coins Detais</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { coin: state.coins[ownProps.match.params.coin] };
};

export default connect(mapStateToProps, { fetchHistoricalData })(CoinDetails);
