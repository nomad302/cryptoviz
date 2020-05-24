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

const SearchFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

class DashBoard extends React.Component {
  componentDidMount() {
    this.props.fetchCoins();
  }

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
        <SearchFlex>
          <SearchBar
            value={this.props.searchTerm}
            onSearch={this.onSeachChange}
          />
        </SearchFlex>

        <CoinGrid />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    coins: state.coins,
    searchTerm: state.searchTerm.value,
  };
};

export default connect(mapStateToProps, { fetchCoins, searchCoins })(DashBoard);
