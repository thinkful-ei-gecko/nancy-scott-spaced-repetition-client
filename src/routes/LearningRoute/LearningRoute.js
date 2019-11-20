import React, { Component } from 'react'
import config from '../../config'
import TokenService from '../../services/token-service'
import './LearningRoute.css'


class LearningRoute extends Component {
  state = {
    answer: '',
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(result => { this.setState(result) })
  }

  updateAnswer = (e) => {
    console.log(e.target.value)
    this.setState({
      answer: e.target.value
    })
  }
  handleAnswer = (e) => {
    e.preventDefault()
    console.log('in handleAnswer')
    fetch(`${config.API_ENDPOINT}/language/head`, {
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(result => {
        console.log(result);
        this.setState(result)
      })
  }


  render() {
    const { nextWord, wordCorrectCount, wordIncorrectCount, total_score } = this.state

    return (
      <section className='learn-main container'>
        <h2 className="cypress" style={{ display: 'none'}}>Translate the word:</h2>
        <h3 className="learn-main-h2">What is the name of this algorithm?</h3>
        <span style={{ display: 'none'}}>{this.state.nextWord}</span>
        <p className="learn-main-total">Your total score is: 999{total_score}</p>
        <div className='test-main'>
          <p className="question">What is the name of this algorithm?</p>
          <img src={`./imgAssets/${nextWord}`} alt='algorithm question' />
          <span className="score">You have answered this word correctly {wordCorrectCount} times.</span>
          <span className="score">You have answered this word incorrectly {wordIncorrectCount} times.</span>
        </div>
        <form className="answer-form">
          <label htmlFor="learn-guess-input" className="guess-label" style={{ display: 'none' }}>What's the translation for this word?</label>
          <input id="learn-guess-input" type="text" onChange={this.updateAnswer} required></input>
          <button type="submit" onClick={this.handleAnswer}>Submit your answer</button>
        </form>
      </section>
    );
  }
}

export default LearningRoute
