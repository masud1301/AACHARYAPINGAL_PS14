import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";
import { countCategory, countPriority } from "../utils/logic";

// Register chart.js components
ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

// 👇 DEFAULT VALUE ADDED (VERY IMPORTANT)
function Dashboard({ issues = [] }) {

  // Safe counts (won’t crash if issues is empty)
  const categoryCount = countCategory(issues);
  const priorityCount = countPriority(issues);

  const categoryData = {
    labels: ["Network", "IT", "Admin", "Facilities"],
    datasets: [
      {
        label: "Issues by Category",
        data: [
          categoryCount.Network || 0,
          categoryCount.IT || 0,
          categoryCount.Admin || 0,
          categoryCount.Facilities || 0,
        ],
        backgroundColor: [
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#f87171",
        ],
      },
    ],
  };

  const priorityData = {
    labels: ["Low", "Medium", "High"],
    datasets: [
      {
        label: "Issues by Priority",
        data: [
          priorityCount.Low || 0,
          priorityCount.Medium || 0,
          priorityCount.High || 0,
        ],
        backgroundColor: ["#86efac", "#fde047", "#f87171"],
      },
    ],
  };

  return (
    <div className="mt-6">

      <h2 className="text-xl font-bold text-center mb-4">
        Dashboard
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-4 shadow">
          <Pie data={categoryData} />
        </div>

        <div className="border rounded-lg p-4 shadow">
          <Bar data={priorityData} />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;
