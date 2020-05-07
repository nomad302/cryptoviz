import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  color: #fff;
  margin-top: 20px;
`;

const Tile = styled.div`
  text-align: center;
  background: #1f1b24;
  color: #fff;
  padding: 15px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
`;

class CoinGrid extends React.Component {
  renderCoinsList() {
    const BASE_URL = "https://www.cryptocompare.com";
    return this.props.coins.slice(0, 100).map((coin, index) => {
      return (
        <Tile key={index}>
          <Image src={BASE_URL + coin.ImageUrl} alt={coin.Name} />
          <p>{coin.CoinName}</p>
        </Tile>
      );
    });
  }
  render() {
    return <Grid>{this.renderCoinsList()}</Grid>;
  }
}

export default CoinGrid;
