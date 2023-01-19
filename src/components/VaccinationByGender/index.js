// Write your code here
import {Component} from 'react'

import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

class VaccinationByGender extends Component {
  render() {
    const {data} = this.props
    return (
      <div className="blog-Item">
        <h1 className="text2">Vaccination by gender</h1>
        <div className="barChart">
          <PieChart height={300} width={1000}>
            <Pie
              cx="70%"
              cy="40%"
              data={data}
              startAngle={0}
              endAngle={180}
              innerRadius="40%"
              outerRadius="70%"
              dataKey="count"
            >
              <Cell name="Male" fill="#fecba6" />
              <Cell name="Female" fill="#b3d23f" />
              <Cell name="Others" fill="#a44c9e" />
            </Pie>
            <Legend
              iconType="circle"
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </PieChart>
        </div>
      </div>
    )
  }
}

export default VaccinationByGender
