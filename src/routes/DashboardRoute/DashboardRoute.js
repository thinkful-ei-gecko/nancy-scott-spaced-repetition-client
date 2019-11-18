import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
// import LearningRoute from '../LearningRoute/LearningRoute'

class DashboardRoute extends Component {
  render() {
    return (
      <section>

        <div className='dash-container'>
          <div className='category-container'>
            <p>Javascript Algorithms</p>


            <Link style={{ textDecoration: 'none' }} to='/study'>Study Mode</Link>
            <Link style={{ textDecoration: 'none' }} to='/learn'>Test Mode</Link>
          </div>
          
        </div>
      </section>
    );
  }
}

export default DashboardRoute
