import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  color: #efbb35;
  margin-top: 20px;
  & :hover {
    cursor: pointer;
    box-shadow: 0 0 3px 3px #41b883;
  }
`;

const Tile = styled(Link)`
  text-align: center;
  background: #1f1b24;
  color: #efbb35;
  padding: 15px;
  text-decoration: none;
  & :hover {
    box-shadow: none;
  }
`;

const Image = styled.img`
  height: 70px;
  width: 70px;
`;

const Price = styled.strong`
  color: ${(props) => (props.price < 0 ? "#ff2d15" : "#2f9821")};
`;

const Title = styled.p`
  font-size: 1.2rem;
  color: #41b883;
  font-weight: bold;
`;

class CoinGrid extends React.Component {
  convertToNumber(value) {
    let str = value.replace("$", "").trim();
    return Number(str);
  }

  renderCoinsList() {
    return this.props.coins
      .filter((coin) => {
        return coin.CoinInfo.FullName.toLowerCase().includes(
          this.props.searchTerm.value
        );
      })
      .map((coin, index) => {
        return (
          <Tile key={index} to={`/coindetail/${coin.CoinInfo.Name}`}>
            <Image
              src={`https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`}
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

const mapStateToProps = (state) => {
  return { coins: state.coins, searchTerm: state.searchTerm };
};

export default connect(mapStateToProps, null)(CoinGrid);
