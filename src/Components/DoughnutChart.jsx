import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  DoughnutController,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register the components
ChartJS.register(Title, Tooltip, Legend, ArcElement, DoughnutController);

const AdminDoughnut = () => {
  const SourceData = [
    {
      label: "Candidates",
      value: 85,
    },
    {
      label: "Jobs Posted",
      value: 100,
    },
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
    <div className="w-full h-72 bg-white rounded-md shadow-lg flex justify-center">
      <Doughnut
        className="canva"
        options={options}
        data={{
          labels: SourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: SourceData.map((data) => data.value),
              backgroundColor: ["rgba(61, 164, 255)", "rgba(47, 53, 115)"],
              borderColor: ["rgba(61, 164, 255)", "rgba(47, 53, 115)"],
            },
          ],
        }}
      />
    </div>
  );
};

export default AdminDoughnut;
