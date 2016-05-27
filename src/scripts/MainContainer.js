import React from 'react';
import Header from './Header.js';
import Question from './Question.js';
import Answer from './Answer.js';
import SubmitButton from './SubmitButton.js'

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            header: 'Welcome to the poll',
            question: 'What is the best',
            answer1: 'Tacos',
            answer2: 'Pizza',
            answer3: 'Cheese'
        }
    }
    render(){
        return(
            <div>
            <Header header={this.state.header}/>
    <Question question={this.state.question}/>
    <Answer id='answer_1' text={this.state.answer1}/>
    <Answer id='answer_2' text={this.state.answer2}/>
    <Answer id='answer_3' text={this.state.answer3}/>
    <SubmitButton text='Go!'/>
            </div>);
    }
}

export default MainContainer;