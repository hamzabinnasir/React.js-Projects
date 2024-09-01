import "./Chart.css"
import React from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: "January",
        Total: 1200,
    },
    {
        name: "February",
        Total: 2100,
    },
    {
        name: "March",
        Total: 800,
    },
    {
        name: "April",
        Total: 1600,
    },
    {
        name: "May",
        Total: 900,
    },
    {
        name: "June",
        Total: 1700,
    },
];
export default function Chart({ aspect }) {
    return (
        <>
            <ResponsiveContainer width="100%" aspect={aspect} className={"chart"}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* Define the linear gradient here */}
                    <defs>
                        <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid className="cartGrid" strokeDasharray="2 2"/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* Apply the gradient to the Area */}
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fill="url(#colorTotal)" />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}