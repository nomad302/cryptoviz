import React from "react";
import { connect } from "react-redux";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import chartTheme from "./chartTheme";

// Apply the theme
Highcharts.theme = chartTheme();
Highcharts.setOptions(Highcharts.theme);

class Chart extends React.Component {
  getData() {
    if (!this.props.historical) {
      return this.props.historical.Data.map(({ time, close }) => [time, close]);
    }
    return [];
  }

  render() {
    let options = {
      title: {
        text: `${this.props.coin} Price`,
      },
      series: [
        {
          name: this.props.coin,
          data: this.props.historical,
        },
      ],
    };

    if (!options.series[0].data) {
      return null;
    }
    return (
      <div>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={options}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { historical: state.historicalData };
};
export default connect(mapStateToProps, {})(Chart);
