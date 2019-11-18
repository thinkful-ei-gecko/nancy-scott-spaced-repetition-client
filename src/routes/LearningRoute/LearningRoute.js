import React, { Component } from 'react'
import config from '../../config'
import './LearningRoute.css'


class LearningRoute extends Component {
  state = {
    answer: ''
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
    // fetch(`${config.API_ENDPOINT}/language`)
    //   .then(res => {
    //     if (!res.ok) {
    //       console.error(err)
    //     }
    //   })
  }

  render() {
    let img = 'binarySearch.png'
    return (
      <section className='learn-main container'>
        <h2>Javascript Algorithm</h2>
        <div className='test-main'>
          <p>What does this algorithm do?</p>
          <img src={`./imgAssets/${img}`} alt='algorithm question'/>
        </div>
        <input onChange={this.updateAnswer} required></input>
        <button onClick={this.handleAnswer}>submit</button> 
      </section>
    );
  }
}

export default LearningRoute
