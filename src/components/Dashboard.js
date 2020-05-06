import React from "react";
import styled from "styled-components";
import CoinGrid from "./CoinGrid";
import cryptoApi from "../api/crypto";

const Board = styled.div`
  height: 100vh;
`;

class DashBoard extends React.Component {
  state = { coinsList: [] };

  componentDidMount() {
    cryptoApi
      //  .get("/data/all/coinlist")
      .then((response) => {
        // this response is object need to convert it to the array or need to find it better way
        const coins = response.data.Data;
        console.log(coins);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Board>
        <CoinGrid />
      </Board>
    );
  }
}

export default DashBoard;
