import React from "react";
import styled from "styled-components";

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
      placeholder="Search"
      value={props.value}
      onChange={props.onSearch}
    />
  );
};

export default SearchBar;
