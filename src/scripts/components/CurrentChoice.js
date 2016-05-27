import React from 'react'

class CurrentChoice extends React.Component{
    render(){
        return(
            <label>current choice is {this.props.text}</label>
        );
    }
}

export default CurrentChoice;