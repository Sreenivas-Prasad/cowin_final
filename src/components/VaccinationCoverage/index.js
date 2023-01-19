// Write your code here
import {Component} from 'react'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import './index.css'

const DataFormatter = number => {
  if (number > 1000) {
    return `${(number / 1000).toString()}k`
  }
  return number.toString()
}

const VaccinationCoverage = props => {
  const {data} = props
  return (
    <div className="blog-Item">
      <h1 className="text2">Vaccination Coverage</h1>
      <div className="barChart">
        <BarChart
          height={300}
          width={1000}
          data={data}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="group_name"
            tick={{
              stroke: 'gray',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
            }}
          />
          <Bar dataKey="dose1" name="Dose 1" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="dose2" name="Dose 2" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </div>
    </div>
  )
}

export default VaccinationCoverage
