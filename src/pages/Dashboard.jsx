import React from "react";
import "./Dashboard.css";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement
);

export default function Dashboard() {
  const doughnutData = {
    labels: ["Chrome", "IE", "Firefox", "Safari", "Opera", "Navigator"],
    datasets: [
      {
        data: [30, 10, 15, 20, 15, 10],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Electronics",
        backgroundColor: "#FF6384",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: "Fashion",
        backgroundColor: "#36A2EB",
        data: [28, 48, 40, 19, 86, 27, 90],
      },
      {
        label: "Foods",
        backgroundColor: "#FFCE56",
        data: [45, 25, 16, 36, 67, 18, 76],
      },
    ],
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li>🏠 Home</li>
          <li>📋 Forms</li>
          <li>⚙️ UI Elements</li>
          <li>📊 Tables</li>
          <li>📈 Presentations</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </aside>

      <main className="main-content">
        <nav className="navbar">
          <h1>📊 Dashboard</h1>
          <div className="nav-actions">
            <button>Share</button>
            <button>Export</button>
            <button>This Week</button>
          </div>
        </nav>

        <div className="cards">
          <div className="card blue"><h3>New Orders</h3><p className="number">150</p></div>
          <div className="card green"><h3>Bounce Rate</h3><p className="number">53%</p></div>
          <div className="card yellow"><h3>User Registrations</h3><p className="number">44</p></div>
          <div className="card red"><h3>Unique Visitors</h3><p className="number">65</p></div>
        </div>

        <div className="charts">
          <div className="chart">
            <h3>Doughnut Chart</h3>
            <Doughnut data={doughnutData} />
          </div>
          <div className="chart">
            <h3>Bar Chart</h3>
            <Bar data={barData} />
          </div>
        </div>
      </main>
    </div>
  );
}
