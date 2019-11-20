import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LearningContext from '../../contexts/learningContext'
import './StudyRoute.css'

export default class StudyRoute extends Component {

    static contextType = LearningContext

    render() {
        console.log('in study route')
        return (
            <div className='study-container'>
                {this.context.words.map(word => {
                    console.log(word.original)
                    return <div className='qcontainer' key={word.id}>
                        <p>{word.translation}</p>
                        <img src={`./imgAssets/${word.original}`} alt='algorithm question' />
                    </div>
                })}
            </div>
        )
    }
}

