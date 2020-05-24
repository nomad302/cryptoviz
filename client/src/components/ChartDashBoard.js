import React from "react";
import CoinDetails from "./CoinDetails";
import TopCoins from "./TopCoins";
import { setCurrentCoin } from "../actions";
import { connect } from "react-redux";

class ChartDashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.props.setCurrentCoin(this.props.match.params.name);
  }
  render() {
    return (
      <div>
        <TopCoins />
        <CoinDetails />
      </div>
    );
  }
}

export default connect(null, { setCurrentCoin })(ChartDashBoard);
