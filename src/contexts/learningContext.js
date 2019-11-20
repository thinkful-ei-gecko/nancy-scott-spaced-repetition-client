import React, { Component } from 'react'

export const learn = {
    id: null,
    correct: null,
    words:[],
    user_id: null,
    total_score: null
}

const LearningContext = React.createContext({
    id: null,
    correct: null,
    words:[],
    user_id: null,
    total_score: null,
    setWords: () => {}
})

export default LearningContext

export class LearningProvider extends Component {
    state = {
        id: null,
        correct: null,
        words:[],
        user_id: null,
        total_score: null
    }

    setWords = (words) => {
        console.log('in context setting words', words)
        this.setState({
            words: words
        })
    }
    render() {
        const value = {
            words: this.state.words,
            user_id: this.state.user_id,
            total_score: this.state.total_score,
            setWords: this.setWords
        }
        return (
            <LearningContext.Provider value={value}>
                {this.props.children}
            </LearningContext.Provider>
        )
    }

}