import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { searchCoins } from "../actions";

const Input = styled.input`
  padding: 1rem;
  background: #1f1b24;
  color: #f9ffee;
  font-size: 1.2rem;
  margin: 20px 0;
  border-radius: 10px;
  border: none;
`;

const SearchBar = (props) => {
  return (
    <Input
      type="text"
      placeholder="Search Coins"
      value={props.searchValue}
      onChange={(e) => props.searchCoins(e.target.value)}
    />
  );
};

const mapStateToProps = (state) => {
  return { searchValue: state.searchTerm.value };
};

export default connect(mapStateToProps, { searchCoins })(SearchBar);
