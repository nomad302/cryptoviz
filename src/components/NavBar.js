import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  font-size: 1.5rem;
  color: #bb86fc;
`;
const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  padding: 0 16px;
  background: #1f1b24;
  color: #bb86fc;
  line-height: 72px;
`;

const ControlLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #bb86fc;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function ControlButton({ to, name }) {
  return <ControlLink to={to}>{name}</ControlLink>;
}

const NavBar = () => {
  return (
    <Bar>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Logo>Cryptoviz</Logo>
      </Link>

      <div></div>

      <ControlButton to="/news" name="News" />
      <ControlButton to="/" name="Settings" />
    </Bar>
  );
};

export default NavBar;
