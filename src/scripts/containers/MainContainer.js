import React from 'react';
import Header from '../components/Header.js';
import Question from '../components/Question.js';
import SubmitButton from '../components/SubmitButton.js'
import RadioButtonGroup from '../components/RadioButtonGroup'

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            header: 'Welcome to the poll',
            question: 'What is the best',
            choices: [
                {value: 'tachos', label: 'Tachos'},
                {value: 'pizza', label: 'Pizza'},
                {value: 'cheese', label: 'Cheese'}
                ],
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