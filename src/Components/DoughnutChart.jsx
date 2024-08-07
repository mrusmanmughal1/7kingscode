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

const AdminDoughnut = ({ allJobs, activeJobs, inactiveJobs }) => {
  const SourceData = [
    {
      label: "Jobs-Posted",
      value: allJobs,
    },
    {
      label: "InActive-Jobs",
      value: inactiveJobs,
    },
    {
      label: "Active-Jobs",
      value: activeJobs,
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
        options={options}
        data={{
          labels: SourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: SourceData.map((data) => data.value),
              backgroundColor: [
                "rgba(47, 53, 115)",
                "rgba(255, 0, 0)",
                "rgba(0,128,0)",
              ],
              borderColor: [
                "rgba(47, 53, 115)",
                "rgba(255, 0, 0)",
                "rgba(0,128,0)",
              ],
            },
          ],
        }}
      />
    </div>
  );
};

export default AdminDoughnut;
