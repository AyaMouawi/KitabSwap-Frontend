import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: [],
      colors: [
        "#B7312D",
        "#B7452E",
        "#B75E2F",
        "#F6F6F6",
        "#EAEAEA",
      ],
      fill: {
        colors: [
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

  useEffect(() => {
    if (data && data.sellers && data.categories) {
      setChartData({
        series: data.sellers,
        options: {
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: data.categories,
          colors: [
            "#B7312D",
            "#B7452E",
            "#B75E2F",
            "#F6F6F6",
            "#EAEAEA",
          ],
          fill: {
            colors: [
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
    }
  }, [data]);

  if (!data || !data.sellers || !data.categories) {
    return null;
  }

  return (
    <div className="">
      <h1 className="text-lg w-48 mb-8"> Best Seller Categories</h1>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={380} />
      </div>
    </div>
  );
};

export default PieChart;
