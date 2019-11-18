import React, { Component } from 'react'
import './LearningRoute.css'


class LearningRoute extends Component {


  render() {
    return (
      <section className='learn-main container'>
        <h2>Javascript Algorithm</h2>
        <div className='test-main'>
          <p>What does this algorithm do?</p>
          {/* <img src={`./imgAssets/${img}`} alt='algorithm question'/> */}
          
        </div>
      </section>
    );
  }
}

export default LearningRoute
