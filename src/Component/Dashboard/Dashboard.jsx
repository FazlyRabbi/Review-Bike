import React, { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  ComposedChart,
  Scatter,
} from "recharts";
import Navbar from "../Shared/Navbar/Navbar";
import { ChartContext } from "../../App";
import "./dashboard.css";

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

function Dashboard() {
  const [chart] = useContext(ChartContext);

  const data = chart?.data;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid  t align-center justify-items-center sm:grid-cols-1 lg:grid-cols-2  md:grid-cols-2">
          <div className="mr-12 py-8">
            <h2 className="text-center text-xl font-bold mb-4">LineChart</h2>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="sell"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="investment"
                stroke="#EF4444"
              />
            </LineChart>
          </div>

          <div className="py-8">
            <h2 className="text-center text-xl font-bold mb-4">AreaChart</h2>
            <AreaChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#7184d8"
                fill="#7884d8"
              />
              <Area
                type="monotone"
                dataKey="sell"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
          <div className="py-8 mr-12">
            <h2 className="text-center text-xl font-bold mb-4">BarChart</h2>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
              <Bar dataKey="sell" fill="#82ca9d" />
            </BarChart>
          </div>
          <div className="py-8">
            <h2 className="text-center text-xl font-bold mb-4">
              ComposedChart
            </h2>
            <ComposedChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="month" scale="band" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                fill="#8884d8"
                stroke="#8884d8"
              />
              <Bar dataKey="sell" barSize={20} fill="#413ea0" />
              <Line type="monotone" dataKey="investment" stroke="#ff7300" />
              <Scatter dataKey="cnt" fill="red" />
            </ComposedChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
