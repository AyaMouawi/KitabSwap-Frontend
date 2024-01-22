import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';

const ColumnChart = ({ data }) => {
  const colors = ["#B7312D"];

  const [chartData, setChartData] = useState({
    series: [{
      data: data || []  
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
           
          }
        }
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: '90%',
          distributed: false,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
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
      setChartData({
        series: [{
          data: data
        }],
        options: {
          chart: {
            height: 350,
            type: 'bar',
            events: {
              click: function (chart, w, e) {
              
              }
            }
          },
          colors: colors,
          plotOptions: {
            bar: {
              columnWidth: '90%',
              distributed: false,
            }
          },
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
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
    }
  }, [data]);

  if (!data) {
    return null;
  }

  return (
    <div className="">
      <h1 className="text-lg w-48 mb-8"> Number of trades per month</h1>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
    </div>
  );
};

export default ColumnChart;
