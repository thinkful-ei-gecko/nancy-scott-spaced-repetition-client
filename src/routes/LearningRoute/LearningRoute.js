import React, { Component } from 'react'
import config from '../../config'
import TokenService from '../../services/token-service'
import Results from './Results';
import './LearningRoute.css'


class LearningRoute extends Component {
  state = {
    answer: '',
    nextWord: '',
    totalScore: 0,
    wordCorrectCount: 0,
    wordIncorrectCount: 0,
    qAnswered: false,
    correct: null,
    resAnswer: null,
    upcomingWord: null,
    resCorrectCount: null,
    resIncorrectCount: null,
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
    const { answer } = this.state;
    console.log('in handleAnswer')
    fetch(`${config.API_ENDPOINT}/language/guess`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        guess: answer
      })
    })
      .then(res =>
        (!res.ok) ? res.json().then(e => Promise.reject(e))
          : res.json()
      ).then(result => {
        this.setState({
          qAnswered: true,
          correct: result.isCorrect,
          resAnswer: result.answer,
          upcomingWord: result.nextWord,
          resCorrectCount: result.wordCorrectWordCount,
          resIncorrectCount: result.wordIncorrectWordCount,
          totalScore: result.totalScore,
        })
      })
  }

  displayQuestion = () => {
    const { nextWord, wordCorrectCount, wordIncorrectCount, total_score } = this.state
    return (
      <section className='learn-main container'>
        <h2 className="cypress" style={{ display: 'none' }}>Translate the word:</h2>
        <h3 className="learn-main-h2">What is the name of this algorithm?</h3>
        <span style={{ display: 'none' }}>{this.state.nextWord}</span>
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
    )
  }


  render() {
    const {
      answer,
      qAnswered,
      correct,
      resAnswer,
      upcomingWord,
      resCorrectCount,
      resIncorrectCount,
      totalScore
    } = this.state;

    return (
      <>
        {qAnswered
          ? <Results
            correct={correct}
            nextWord={upcomingWord}
            answer={resAnswer}
            guess={answer}
            totalScore={totalScore}
          />
          : this.displayQuestion()
        }
      </>
    );
  }
}

export default LearningRoute
