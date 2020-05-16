import React from "react";
import styled from "styled-components";

const NewsGrid = styled.div`
  display grid;
  grid-template-columns: repeat(5, 1fr);
`;
const NewsTile = styled.div`
  color: "#fff";
  background: "#1f1b24";
`;

class News extends React.Component {
  renderCoinsList() {
    return this.props.newsList.map((news, index) => {
      return <NewsTile key={index}></NewsTile>;
    });
  }

  render() {
    return (
      <div>
        <NewsGrid></NewsGrid>
      </div>
    );
  }
}

export default News;
