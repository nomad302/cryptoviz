import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCoins, fetchHistoricalData } from "../actions";
import Chart from "./chart/Chart";

const ChartGrid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  background: #1f1b24;
  align-items: center;
`;

const SideGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  grid-gap: 15px;
  background: #1f1b24;
  color: #efbb35;
  margin: 0;
`;

const Image = styled.img`
  height: 150px;
  width: 150px;
  margin: auto;
`;

const Price = styled.h1`
  margin: auto;
  font-size: 2rem;
  color: ${(props) => (props.price < 0 ? "#ff2d15" : "#2f9821")};
`;
const Title = styled.h1`
  margin: auto;
  font-size: 2rem;
`;

class CoinDetails extends React.Component {
  convertToNumber(value) {
    let str = value.replace("$", "").trim();
    return Number(str);
  }
  getCurrentCoin() {
    return this.props.coins.find(
      (coin) => coin.CoinInfo.Name === this.props.currentCoin
    );
  }
  render() {
    return (
      <ChartGrid>
        <SideGrid>
          <Title>{this.getCurrentCoin().CoinInfo.Name}</Title>
          <Image
            src={`https://www.cryptocompare.com${
              this.getCurrentCoin().CoinInfo.ImageUrl
            }`}
            alt={this.props.currentCoin}
          />
          <Price
            price={this.convertToNumber(
              this.getCurrentCoin().DISPLAY.USD.CHANGE24HOUR
            )}
          >
            {this.getCurrentCoin().DISPLAY.USD.PRICE}
          </Price>
        </SideGrid>

        <Chart coin={this.getCurrentCoin()} />
      </ChartGrid>
    );
  }
}

const mapStateToProps = (state) => {
  return { coins: state.coins, currentCoin: state.currentCoin.value };
};

export default connect(mapStateToProps, {
  fetchCoins,
  fetchHistoricalData,
})(CoinDetails);
