import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import config from '../../config'
// import StudyRoute from '../StudyRoute/StudyRoute'
import './Dashboard.css'
// import '../StudyRoute/StudyRoute.css'
import LearningContext from '../../contexts/learningContext'
// import LearningRoute from '../LearningRoute/LearningRoute'

class DashboardRoute extends Component {

  // state = {
  //   studyMode: false
  // }
  static contextType = LearningContext;

  setStudy = () => {
    this.setState({
      studyMode: true
    })
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(result => {
        this.context.setWords(result.words);
        this.context.setLanguage(result.language);
      })
  }
  render() {

    const { language } = this.context;

    // let studyDisplay;
    // if (this.state.studyMode) {
    //   studyDisplay = <StudyRoute />
    // }
    return (
        <section className='dash-container'>
          <div className='category-container'>
            <div className="language-header">
              <h2 className="dash-h2">{language.name}</h2>
              <h4 className="dash-h4">Total correct answers: {language.total_score}</h4>
            </div>
            <div className="dash-body">
              <Link tabIndex={1 } style={{ textDecoration: 'none' }} to='/learn'>Start practicing</Link>
              <h3 className="cypress" style={{ display: 'none'}}>Words to practice</h3>
              <h4 className="dash-h3">Algorithms to practice</h4>

            </div>

          </div>
          <section className='study-display-container'>
            <ul className="q-list">
              {this.context.words.map(word => (
                <li className='qcontainer' key={word.id}>
                  <h4 className="cypress" style={{ display: 'none' }}>{word.original}</h4>
                  <h5 className="qcontainer-h5">{word.translation}</h5>
                  <p className="qcontainer-p">correct answer count: {word.correct_count}</p>
                  <p className="qcontainer-p">incorrect answer count: {word.incorrect_count}</p>
                  <img src={`%PUBLIC_URL%/imgAssets/${word.original}`} alt='algorithm question' />
                </li>
              ))}
            </ul>
          </section>
        </section>
    );
  }
}

export default DashboardRoute

// return (
//   <div className='study-container'>
//       {this.context.words.map(word => {
//           console.log(word.original)
//           return <div className='qcontainer' key={word.id}>
//               <p>{word.translation}</p>
//               <img src={`./imgAssets/${word.original}`} alt='algorithm question' />
//           </div>
//       })}
//   </div>
// )
// }
// }


