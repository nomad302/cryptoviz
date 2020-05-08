import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  color: #efbb35;
  margin-top: 20px;
`;

const Tile = styled.div`
  text-align: center;
  background: #1f1b24;
  color: #efbb35;
  padding: 15px;
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

const Price = styled.strong`
  color: ${(props) => (props.price < 0 ? "red" : "green")};
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: #41b883;
`;
class CoinGrid extends React.Component {
  convertToNumber(value) {
    let str = value.replace("$", "").trim();
    return Number(str);
  }

  renderCoinsList() {
    const BASE_URL = "https://www.cryptocompare.com";
    console.log(this.props.coins[0]);
    return this.props.coins
      .filter((coin) => {
        return coin.CoinInfo.FullName.toLowerCase().includes(this.props.term);
      })
      .map((coin, index) => {
        return (
          <Tile key={index}>
            <Image
              src={BASE_URL + coin.CoinInfo.ImageUrl}
              alt={coin.CoinInfo.Name}
            />
            <Title>{coin.CoinInfo.FullName}</Title>
            <p>Market Cap : {coin.DISPLAY.USD.MKTCAP}</p>
            <p>Price : {coin.DISPLAY.USD.PRICE}</p>
            <p>
              Change (24h):{" "}
              <Price
                price={this.convertToNumber(coin.DISPLAY.USD.CHANGE24HOUR)}
              >
                {coin.DISPLAY.USD.CHANGE24HOUR}
              </Price>
            </p>
          </Tile>
        );
      });
  }
  render() {
    return <Grid>{this.renderCoinsList()}</Grid>;
  }
}

export default CoinGrid;
