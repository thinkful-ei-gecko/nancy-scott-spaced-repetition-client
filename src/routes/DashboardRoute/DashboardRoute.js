import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
import StudyRoute from '../StudyRoute/StudyRoute'
import './Dashboard.css'
import '../StudyRoute/StudyRoute.css'
import LearningContext from '../../contexts/learningContext'
// import LearningRoute from '../LearningRoute/LearningRoute'

class DashboardRoute extends Component {

  state = {
    studyMode: false
  }
  static contextType = LearningContext

  setStudy = () => {
    this.setState({
      studyMode: true
    })
  }

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
      .then(result => this.context.setWords(result.words))
  }
  render() {
    console.log(this.context)
    let studyDisplay
    if(this.state.studyMode) {
      studyDisplay = <StudyRoute />
    }
    return (
      <section>

        <div className='dash-container'>
          <div className='category-container'>
            <h2>Javascript Algorithms</h2>

            <Link style={{ textDecoration: 'none' }} to='/' onClick={this.setStudy}>Study Mode</Link>
            <Link style={{ textDecoration: 'none' }} to='/learn'>Test Mode</Link>
          </div>
          <div className='study-display-container'>
            {studyDisplay}
          </div>
        </div>
      </section>
    );
  }
}

export default DashboardRoute
