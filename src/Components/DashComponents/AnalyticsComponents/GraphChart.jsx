import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({ data }) => {
  const [chartData, setChartData] = useState({
    series: [{
      name: "Desktops",
      data: [],
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      colors: ['#B6322C'],
      dataLabels: {
        enabled: true
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        labels: {
          style: {
            colors: "#000000",
            fontSize: '15px',
          },
          rotate: -45,
        }
      }
    },
  });

  useEffect(() => {
    if (data) {
      setChartData(prevChartData => ({
        ...prevChartData,
        series: [{
          name: "Desktops",
          data: data,
        }],
      }));
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <div className="">
      <h1 className="text-lg w-48 mb-8"> Number of orders per month</h1>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
      </div>
    </div>
  );
};

export default ApexChart;
