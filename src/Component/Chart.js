import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          },
          zoom: {
            enabled: true,
            type: "x",
            resetIcon: {
              offsetX: -10,
              offsetY: 0,
              fillColor: "#fff",
              strokeColor: "#37474F"
            },
            selection: {
              background: "#90CAF9",
              border: "#0D47A1"
            }
          }
        },
        plotOptions: {
          bar: {}
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [
            "November 1",
            "November 8",
            "November 15",
            "November 23",
            "November 31"
          ],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: true,
            trim: true
          }
        },
        fill: {
          colors: ["#2e7d32"]
        },
        yaxis: {}
      },
      series: [
        {
          name: "series-1",
          data: [10, 20, 30, 40, 50]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              height="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
