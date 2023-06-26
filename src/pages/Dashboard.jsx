import React from "react";
import "../styles/Dashboard.css";
import SingleCard from "../components/reuseble/SingleCard";
import MileCharts from "../charts/MileCharts";
import CarStatsChart from "../charts/CarStatsChart";

const carObj = {
  title: "Total Cars",
  icon: "ri-car-line",
  totalNumber: 750,
};
const tripObj = {
  title: "Daily Trips",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Clients Annually",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Kilometers Daily",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>
        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Miles Statics</h3>
            <MileCharts />
          </div>
          <div className="stats">
            <h3 className="stats__title">Car Statistics</h3>
            <CarStatsChart />
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Dashboard;
