import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieShipmentChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Team A', 'Team B'],
      colors:   [
        "#B7312D",
        "#B7452E",
        "#B75E2F",
        "#F6F6F6",
        "#EAEAEA",
       
      ],
      fill: {
       
          colors:   [
    "#B7312D",
    "#B7452E",
    "#B75E2F",
    "#F6F6F6",
    "#EAEAEA",
   
  ],
       
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
    </div>
  );
};

export default PieShipmentChart;
