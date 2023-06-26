import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip } from "recharts";
import mileStaticsData from "../assets/dummy-data/mileStatics";

const MileCharts = () => {
  return (
    <ResponsiveContainer width="100%">
      <BarChart data={mileStaticsData}>
        <XAxis dataKey="name" stroke="#2884ff" />
        <Bar dataKey="mileStats" fill="#2884ff" stroke="#2882ff" barSize={30} />
        <Tooltip wrapperClassName="tooltip__style" cursor={false} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MileCharts;
