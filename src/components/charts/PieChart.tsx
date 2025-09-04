"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["On-Time", "Delayed", "Early"],
    datasets: [
      {
        label: "Delivery Status",
        data: [300, 50, 100],
        backgroundColor: ["#50E3C2", "#FF4136", "#F0B429"],
        borderColor: ["#50E3C2", "#FF4136", "#F0B429"],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;
