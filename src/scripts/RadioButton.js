import React from 'react';

class Answer extends React.Component{
    render(){
        return(
                <div className='radio'>
                <label>
            <input type='radio' name={this.props.id}/>
             {this.props.text}
        </label>
            </div>
        );
    }
}
export default Answer;