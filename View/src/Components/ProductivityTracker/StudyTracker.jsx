import React, { useState } from "react";
// Dummy study hour data for weekly intervals
const weeklyStudyHourData = [
  { date: "Mon", hours: 4 },
  { date: "Tue", hours: 3 },
  { date: "Wed", hours: 4 },
  { date: "Thu", hours: 5 },
  { date: "Fri", hours: 7 },
  { date: "Sat", hours: 4 },
  { date: "Sun", hours: 2 },
  // Add more data points for each week as needed
];

// Dummy study hour data for monthly intervals
const monthlyStudyHourData = [
  { monthYear: "2024-01", hours: 100 },
  { monthYear: "2024-02", hours: 30 },
  { monthYear: "2024-03", hours: 50 },
  { monthYear: "2024-04", hours: 90 },
  // Add more data points for each month as needed
];

// Dummy study hour data for yearly intervals
const yearlyStudyHourData = [
  { year: "2021", hours: 800 },
  { year: "2022", hours: 1400 },
  { year: "2023", hours: 200 },
  { year: "2024", hours: 700 },
  // Add more data points for each year as needed
];
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CustomTooltip } from "./CustomTooltip";
export const StudyTracker = () => {
  return (
    <div>
      <div className="w-full px-4 my-4 flex justify-between items-center">
        <div className="space-x-2">
          <button className="px-3 py-2 border rounded-2xl border-gray-400/50 text-gray-200 text-sm">
            Weekly
          </button>
          <button className="px-3 py-2 border rounded-2xl border-gray-400/50 text-gray-200 text-sm">
            Monthly
          </button>
          <button className="px-3 py-2 border rounded-2xl border-gray-400/50 text-gray-200 text-sm">
            Yearly
          </button>
        </div>
        <div></div>
      </div>
      <div className="w-full h-fit rounded-2xl px-4 py-5 max-h-[35rem] border bg-gray-800/30 border-gray-500/20">
        <h1 className="font-semibold text-gray-100 text-2xl py-3 text-center">
          Weekly Study Progress
        </h1>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart
            data={weeklyStudyHourData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "transparent" }}
            />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#7f007f"
              fill="rgba(127, 0, 127,0.2)"
              strokeWidth={3}
            />
            <CartesianGrid strokeDasharray="5 5" />

            <XAxis dataKey="date" />
            <YAxis />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};