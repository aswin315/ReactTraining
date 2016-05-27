import React from 'react';
import Header from '../components/Header.js';
import Question from '../components/Question.js';
import SubmitButton from '../components/SubmitButton.js';
import RadioButtonGroup from '../components/RadioButtonGroup';
import data from '../../data/data.json';

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            header: data.poll.header,
            question: data.poll.questions[0].question,
            choices: data.poll.questions[0].choices,
            checkedValue: ''
        }
        this.setCheckedValue = this.setCheckedValue.bind(this);
    }
    setCheckedValue(value){
        this.setState({
            checkedValue: value
        });
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
            <RadioButtonGroup name='answer' checkedValue = {this.state.checkedValue} choices ={this.state.choices} onChange ={this.setCheckedValue}/>
    <SubmitButton text='Go' />
        </form>
        </div>
        </div>

        </div>
    );
    }
}

export default MainContainer;