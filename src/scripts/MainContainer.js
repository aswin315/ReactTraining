import React from 'react';
import Header from './Header.js';
import Question from './Question.js';
import Answer from './Answer.js';
import SubmitButton from './SubmitButton.js'

class MainContainer extends React.Component{
   render(){
    return(
        <div>
           <Header header='Welcome'/>
           <Question question='What is this question'/>
           <Answer id='answer_1' text='Answer 1'/>
           <Answer id='answer_2' text='Answer 2'/>
           <Answer id='answer_3' text='Answer 3'/>
               <SubmitButton text='Go!'/>
        </div>);
   } 
}

export default MainContainer;