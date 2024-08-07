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

const LineChart = ({ allJobs, activeJobs, inactiveJobs }) => {
  const rev = [
    {
      label: "Jan",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Feb",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Mar",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Apr",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "May",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Jun",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Jul",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Aug",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Sep",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Oct",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Nov",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
    },
    {
      label: "Dec",
      JobsPosted: allJobs,
      Active_Jobs: activeJobs,
      In_Active_Jobs: inactiveJobs,
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
    <div className="w-full h-80 bg-white rounded-md shadow-lg p-8 flex">
      <Line
        options={options}
        data={{
          labels: rev.map((data) => data.label),
          datasets: [
            {
              label: "Jobs Posted",
              data: rev.map((data) => data.JobsPosted),
              backgroundColor: "#1B2377",
              borderColor: "#1B2377",
            },
            {
              label: "Active Jobs",
              data: rev.map((data) => data.Active_Jobs),
              backgroundColor: "#008000",
              borderColor: "#008000",
            },
            {
              label: "In Active Jobs",
              data: rev.map((data) => data.In_Active_Jobs),
              backgroundColor: "#FF0000",
              borderColor: "#FF0000",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
