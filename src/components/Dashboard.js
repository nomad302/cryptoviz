import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import CoinGrid from "./CoinGrid";
import cryptoApi from "../api/crypto";

const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Input = styled.input`
  padding: 1rem;
  background: #1f1b24;
  color: #f9ffee;
  font-size: 1.2rem;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
`;
class DashBoard extends React.Component {
  state = { coinsList: [], searchField: "" };

  componentDidMount() {
    cryptoApi
      .get("/data/top/mktcapfull?limit=100&tsym=USD")
      .then((response) => {
        this.setState({
          coinsList: response.data.Data,
        });
        console.log(this.state.coinsList[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onSeachChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    if (!this.state.coinsList.length) {
      return (
        <Board>
          <Loader
            type="Grid"
            color="#41b883"
            height={300}
            width={300}
            timeout={30000} // 30sec
          />
        </Board>
      );
    }
    return (
      <div>
        <Input
          type="text"
          placeholder="Search Coin"
          value={this.state.searchField}
          onChange={this.onSeachChange}
        />
        <CoinGrid coins={this.state.coinsList} term={this.state.searchField} />
      </div>
    );
  }
}

export default DashBoard;
