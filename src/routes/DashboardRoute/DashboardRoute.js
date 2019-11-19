import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import './Dashboard.css'
// import LearningRoute from '../LearningRoute/LearningRoute'

class DashboardRoute extends Component {

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'Authorization' : `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
        (!res.ok) ? res.json().then(e => Promise.reject(e))
        : res.json()
      )
  }
  render() {
    return (
      <section>

        <div className='dash-container'>
          <div className='category-container'>
            <h2>Javascript Algorithms</h2>

            <Link style={{ textDecoration: 'none' }} to='/study'>Study Mode</Link>
            <Link style={{ textDecoration: 'none' }} to='/learn'>Test Mode</Link>
          </div>

        </div>
      </section>
    );
  }
}

export default DashboardRoute
