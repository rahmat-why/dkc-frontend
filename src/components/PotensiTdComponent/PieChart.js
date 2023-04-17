import React from 'react';
import { PieChart as MUIPieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const PieChart = (props) => {
  const { dataPotensi } = props

  return (
    <MUIPieChart width={400} height={400}>
      <Pie
        data={dataPotensi}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {
          dataPotensi.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
        }
      </Pie>
      <Legend verticalAlign="top" height={36} />
      <Tooltip />
    </MUIPieChart>
  );
};

export default PieChart;