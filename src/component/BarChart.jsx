

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the necessary components of Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the BarChart component
const BarChart = () => {
  // Define the data for the chart
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sample Data",
        data: [650, 900, 780, 400, 1000, 590, 820, 380, 810, 620, 900, 600],
        backgroundColor: "#8576FF",
        borderColor: "#8576FF",
        borderWidth: 1,
      },
    ],
  };

  // Define options for the chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 1000,
        ticks: {
          stepSize: 200,
          callback: function (value) {
            if ([0, 200, 400, 600, 800, 1000].includes(Number(value))) {
              return value;
            }
            return "";
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Render the chart
  return (
    <div className="bar-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
