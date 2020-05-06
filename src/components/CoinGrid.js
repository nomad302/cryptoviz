import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-column: repeat(5, 1fr);
`;

const Coingrid = () => {
  return <Grid />;
};

export default Coingrid;
