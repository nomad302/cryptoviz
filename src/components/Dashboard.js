import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { fetchCoins, searchCoins } from "../actions";
import CoinGrid from "./CoinGrid";
import SearchBar from "./SearchBar";

const Board = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

class DashBoard extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

  onSeachChange = (e) => {
    this.props.searchCoins({ searchTerm: e.target.value });
  };
  render() {
    if (!this.props.coins.length) {
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
        <SearchBar
          value={this.props.searchTerm}
          onSearch={this.onSeachChange}
        />
        <CoinGrid coins={this.props.coins} term={this.props.searchTerm} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    searchTerm: state.searchTerm,
  };
};

export default connect(mapStateToProps, { fetchCoins, searchCoins })(DashBoard);
