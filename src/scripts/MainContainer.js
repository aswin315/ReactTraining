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
        var rowStyle = {
            backgroundColor: '#dadada',
            border: '1px solid black',
            borderRadius: '6px',
            padding: '10px'
        };
        return(
            <div className="container">
            <div className="jumbotron">
            <Header header={this.state.header} />
    </div>
        <div className="row" style={rowStyle}>
            <div className="col-sm-4 col-sm-offset-4">
            <form>
            <Question question={this.state.question} />
    <Answer id='answer1' text={this.state.answer1} />
    <Answer id='answer2' text={this.state.answer2} />
    <Answer id= 'answer3'text={this.state.answer3} />
    <SubmitButton text='Go' />
        </form>
        </div>
        </div>

        </div>
    );
    }
}

export default MainContainer;