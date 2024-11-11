import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartLine = () => {
  const data = [
    { name: "Dell XPS 13", Total: 4000, Price: 2400, amt: 2400 },
    { name: "Dell XPS 13", Total: 3000, Price: 1398, amt: 2210 },
    { name: "Dell XPS 13", Total: 2000, Price: 9800, amt: 2290 },
    { name: "Dell XPS 13", Total: 2780, Price: 3908, amt: 2000 },
    { name: "Dell XPS 13", Total: 1890, Price: 4800, amt: 2181 },
    { name: "Dell XPS 13", Total: 2390, Price: 3800, amt: 2500 },
    { name: "Dell XPS 13", Total: 3490, Price: 4300, amt: 2100 },
    { name: "Dell XPS 13", Total: 3490, Price: 4300, amt: 2100 },
    { name: "Dell XPS 13", Total: 3490, Price: 4300, amt: 2100 },
    { name: "Dell XPS 13", Total: 3490, Price: 4300, amt: 2100 },
  ];

  return (
    <div className="flex justify-center p-4 sm:p-12">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="4, 4" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
          <YAxis yAxisId="right" orientation="right" stroke="#8884d8" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="Price" fill="#8884d8" />
          <Bar yAxisId="right" dataKey="Total" fill="#82ca9d" />
          <Bar yAxisId="right" dataKey="Rating" fill="#FF0000" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartLine;
