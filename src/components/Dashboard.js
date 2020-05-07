import React from "react";
import styled from "styled-components";
import CoinGrid from "./CoinGrid";
import cryptoApi from "../api/crypto";

const Board = styled.div``;

class DashBoard extends React.Component {
  state = { coinsList: [] };

  componentDidMount() {
    cryptoApi
      .get("/data/all/coinlist")
      .then((response) => {
        // this response is object need to convert it to the array or need to find it better way
        this.setState({ coinsList: Object.values(response.data.Data) });
        console.log(this.state.coinsList[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Board>
        <CoinGrid coins={this.state.coinsList} />
      </Board>
    );
  }
}

export default DashBoard;
