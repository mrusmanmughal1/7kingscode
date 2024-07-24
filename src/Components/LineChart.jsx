import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement, // Add this line
  CategoryScale,
  LinearScale
);

const LineChart = () => {
  const rev = [
    { label: "Jan", Candidates: 32652, Jobs: 9090 },
    { label: "Feb", Candidates: 42393, Jobs: 9090 },
    { label: "Mar", Candidates: 50262, Jobs: 9090 },
    { label: "Apr", Candidates: 64731, Jobs: 9090 },
    { label: "May", Candidates: 41893, Jobs: 90910 },
    { label: "Jun", Candidates: 83809, Jobs: 90190 },
    { label: "Jul", Candidates: 44772, Jobs: 9090 },
    { label: "Aug", Candidates: 37590, Jobs: 9090 },
    { label: "Sep", Candidates: 43349, Jobs: 91090 },
    { label: "Oct", Candidates: 45324, Jobs: 19090 },
    { label: "Nov", Candidates: 47978, Jobs: 9090 },
    { label: "Dec", Candidates: 39175, Jobs: 9090 },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="w-full h-80 bg-white rounded-md shadow-lg p-8 flex">
      <Line
        options={options}
        data={{
          labels: rev.map((data) => data.label),
          datasets: [
            {
              label: "Candidates",
              data: rev.map((data) => data.Candidates),
              backgroundColor: "#3DA4FF",
              borderColor: "#3DA4FF",
            },
            {
              label: "Jobs Posted",
              data: rev.map((data) => data.Jobs),
              backgroundColor: "#2F3573",
              borderColor: "#2F3573",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
