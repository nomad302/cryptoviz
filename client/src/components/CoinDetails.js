import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchHistoricalData, fetchCoins } from "../actions";
import Chart from "./Chart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  align-items: center;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
  margin: auto;
`;

class CoinDetails extends React.Component {
  componentDidMount() {
    this.props.fetchHistoricalData(this.props.match.params.name);
  }
  getCurrentCoin() {
    return this.props.coins.find(
      (coin) => coin.CoinInfo.Name === this.props.match.params.name
    );
  }
  render() {
    return (
      <ChartGrid>
        <Image
          src={`https://www.cryptocompare.com${
            this.getCurrentCoin().CoinInfo.ImageUrl
          }`}
          alt={this.props.match.params.name}
        />
        <Chart />
      </ChartGrid>
    );
  }
}

const mapStateToProps = (state) => {
  return { coins: state.coins, historical: state.historicalData.Data };
};

export default connect(mapStateToProps, { fetchHistoricalData, fetchCoins })(
  CoinDetails
);
