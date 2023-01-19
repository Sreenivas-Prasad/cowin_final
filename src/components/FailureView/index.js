import {Component} from 'react'
import './index.css'

class FailureView extends Component {
  render() {
    return (
      <div>
        <img
          className="img2"
          src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
          alt="failure view"
        />
        <h1>Something went wrong</h1>
      </div>
    )
  }
}

export default FailureView
