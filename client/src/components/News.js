import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchCoinNews } from "../actions";
import { Link } from "react-router-dom";

const NewsGrid = styled.div`
  display grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  grid-gap:15px;
  margin-top:15px;
`;

const NewsTile = styled(Link)`
  text-align: center;
  text-decoration: none;
  color: #efbb35;
  background: #1f1b24;
`;

const Heading = styled.h2`
  text-align: center;
  color: #41b883;
  margin: 15px 0;
`;
const NewsFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;
const Image = styled.img`
  flex: 1;
  height: 100px;
  width: 100px;
`;

const Newstitle = styled.div`
  flex: 2;
  padding: 15px;
`;

class News extends React.Component {
  componentDidMount() {
    this.props.fetchCoinNews();
  }

  getDate(date) {
    let currentDate = new Date(date * 1000);
    return ` ${currentDate.getDate()}/${
      currentDate.getMonth() + 1
    }/${currentDate.getFullYear()}`;
  }

  renderNewsList() {
    return this.props.newsList.map((news, index) => {
      return (
        <NewsTile
          key={index}
          target="_blank"
          to={news.url}
          onClick={(event) => {
            event.preventDefault();
            window.open(news.url);
          }}
        >
          <NewsFlex>
            <Image src={news.imageurl} alt={news.tags} />
            <Newstitle>{news.title}</Newstitle>
          </NewsFlex>
          <p
            style={{
              textAlign: "right",
              marginRight: "30px",
            }}
          >
            <b>{this.getDate(news.published_on)}</b>
          </p>
        </NewsTile>
      );
    });
  }

  render() {
    return (
      <div>
        <Heading>Crypto News</Heading>
        <NewsGrid>{this.renderNewsList()}</NewsGrid>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { newsList: state.coinNews };
};

export default connect(mapStateToProps, { fetchCoinNews })(News);
