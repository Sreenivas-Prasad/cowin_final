// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage/index'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import FailureView from '../FailureView/index'
import './index.css'

class CowinDashboard extends Component {
  state = {
    data1: [],
    data2: [],
    data3: [],
    isLoading: true,
    showErrorImg: false,
  }

  componentDidMount() {
    this.getCowinDetails()
  }

  getCowinDetails = async () => {
    try {
      const response = await fetch(
        'https://apis.ccbp.in/covid-vaccination-data',
      )
      const data4 = await response.json()
      const updatedData1 = data4.vaccination_by_age.map(eachItem1 => ({
        age: eachItem1.age,
        count: eachItem1.count,
      }))
      const updatedData2 = data4.vaccination_by_gender.map(eachItem2 => ({
        count: eachItem2.count,
        gender: eachItem2.gender,
      }))
      const updatedData3 = data4.last_7_days_vaccination.map(eachItem3 => ({
        dose1: eachItem3.dose_1,
        dose2: eachItem3.dose_2,
        group_name: eachItem3.vaccine_date,
      }))
      this.setState({
        data1: updatedData1,
        data2: updatedData2,
        data3: updatedData3,
        isLoading: false,
      })
    } catch {
      this.setState({showErrorImg: true, isLoading: false})
    }
  }

  render() {
    const {isLoading, showErrorImg, data1, data2, data3} = this.state
    console.log(data3)
    return (
      <div className="cowin-con">
        <nav className="nav">
          <img
            className="image1"
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
          />
          <p className="nav-text">Co-WIN</p>
        </nav>
        <h1 className="text1">CoWIN Vaccination in India</h1>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className={showErrorImg && 'hide'}>
            <VaccinationCoverage data={data3} />
            <VaccinationByGender data={data2} />
            <VaccinationByAge data={data1} />
          </div>
        )}
        {showErrorImg && <FailureView />}
      </div>
    )
  }
}

export default CowinDashboard
