import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Group A', value: 250 },
  { name: 'Group B', value: 500 },
  { name: 'Group C', value: 250 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

function CustomizedLabel({ cx, cy }) {
  return (
    <g>
      <text x={cx} y={cy - 10} fontSize={12} fill="gray" textAnchor="middle" dominantBaseline="central">
        Total
      </text>
      <text x={cx} y={cy + 10} fontSize={12} fontWeight={500} fill="black" textAnchor="middle" dominantBaseline="central">
      123456
      </text>
    </g>
  );
}

function PieChartWithText() {
  return (
    <ResponsiveContainer width="100%" height={180}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={CustomizedLabel}
          innerRadius={40}
          outerRadius={60}
          fill="#8884d8"
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartWithText;