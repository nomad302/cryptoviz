import React from "react";
import { connect } from "react-redux";
import { fetchHistoricalData } from "../actions";

class CoinDetails extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchHistoricalData(this.props.match.params.name);
  }

  render() {
    return <div>coindetails : {this.props.coins.length}</div>;
  }
}
const mapStateToProps = (state) => {
  return { coins: state.coins };
};

export default connect(mapStateToProps, { fetchHistoricalData })(CoinDetails);
