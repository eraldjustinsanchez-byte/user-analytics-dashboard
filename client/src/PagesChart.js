import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function PagesChart({ data }) {
  const chartData = {
    labels: data.map(p => p.page),
    datasets: [
      {
        label: "Page Views",
        data: data.map(p => p.views),
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default PagesChart;