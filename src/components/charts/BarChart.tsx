"use client";

import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Vehicle 1", "Vehicle 2", "Vehicle 3", "Vehicle 4", "Vehicle 5"],
    datasets: [
      {
        label: "Mileage (in km)",
        data: [1200, 1900, 300, 500, 200],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarChart;
