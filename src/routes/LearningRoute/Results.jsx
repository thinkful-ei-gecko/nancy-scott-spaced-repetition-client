import React from 'react';
import './Results.css';

export default function Results(props) {
  const {
    correct,
    nextWord,
    answer,
    guess,
    totalScore,
    handleNextClick,
  } = props;

  const displayCorrect = () => {
    return (
      <section className="results">
        <div className="shadow">
          <h2 className="cypress" style={{ display: "none" }}>You were correct! :D</h2>
          <h3 className="results-h3">You were correct!</h3>
          <p className="display-score-p">Your total score is: {totalScore}</p>
          <p className="display-feedback-p">The correct translation for</p>
          <img className="results-img" src={`./imgAssets/${nextWord}`} alt='algorithm question' />
          <p className="display-feedback-p">was {answer} and you chose {guess}!</p>
        </div>
        <button className="next-button" type="button" onClick={() => {handleNextClick()}}>Try another word!</button>
      </section >
    )
  }

  const displayIncorrect = () => {
    return (
      <section className="results">
        <div className="shadow">
          <h2 className="cypress" style={{ display: "none" }}>Good try, but not quite right :(</h2>
          <h3 className="results-h3">Good try, but not quite right</h3>
          <p className="display-score-p">Your total score is: {totalScore}</p>
          <p className="display-feedback-p">The correct translation for</p>
          <img className="results-img" src={`./imgAssets/${nextWord}`} alt='algorithm question' />
          <p className="display-feedback-p">was {answer} and you chose {guess}!</p>
        </div>
        <button className="next-button" type="button" onClick={() => {handleNextClick()}}>Try another word!</button>
      </section>
    )
  }

  return (
    correct ? displayCorrect() : displayIncorrect()
  )
}