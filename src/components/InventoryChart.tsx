"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
  { group: "A+", units: 120 },
  { group: "A-", units: 45 },
  { group: "B+", units: 150 },
  { group: "B-", units: 20 },
  { group: "AB+", units: 80 },
  { group: "AB-", units: 15 },
  { group: "O+", units: 200 },
  { group: "O-", units: 30 },
];

export function InventoryChart() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
        <XAxis
          dataKey="group"
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickMargin={10}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          fontSize={12}
          tickMargin={10}
        />
        <Tooltip
          cursor={{ fill: "transparent" }}
          contentStyle={{ borderRadius: "12px", border: "1px solid #E5E7EB", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
        />
        <Bar dataKey="units" fill="#E53935" radius={[6, 6, 0, 0]} maxBarSize={40} />
      </BarChart>
    </ResponsiveContainer>
  );
}
