 import React from 'react';
 
 class SubmitButton extends React.Component{
     render(){
         return(
                 <div className= 'btn btn-success'>
             <input type='submit' value={this.props.text}/>
             </div>
         );
     }
 }
 export default SubmitButton;