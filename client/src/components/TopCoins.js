import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { setCurrentCoin } from "../actions";

const TopCoinsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

const Tile = styled.div`
  background: #1f1b24;
  color: #efbb35;
  text-align: center;
  padding: 15px;
  width: 100px;
  cursor: pointer;
`;

const Price = styled.h3`
  color: ${(props) => (props.price < 0 ? "red" : "green")};
`;

class TopCoins extends React.Component {
  convertToNumber(value) {
    let str = value.replace("$", "").trim();
    return Number(str);
  }
  renderTopCoins() {
    return this.props.topCoins
      .filter((coin) => {
        return coin.CoinInfo.Name !== this.props.currentCoin;
      })
      .map((coin, index) => {
        return (
          <Tile
            key={index}
            onClick={() => this.props.setCurrentCoin(coin.CoinInfo.Name)}
          >
            <h2>{coin.CoinInfo.Name}</h2>
            <Price price={this.convertToNumber(coin.DISPLAY.USD.CHANGE24HOUR)}>
              {" "}
              {coin.DISPLAY.USD.PRICE}
            </Price>
          </Tile>
        );
      });
  }
  render() {
    return <TopCoinsFlex>{this.renderTopCoins()}</TopCoinsFlex>;
  }
}

const mapStateToProps = (state) => {
  return {
    topCoins: state.coins.slice(0, 9),
    currentCoin: state.currentCoin.value,
  };
};

export default connect(mapStateToProps, {
  setCurrentCoin,
})(TopCoins);
