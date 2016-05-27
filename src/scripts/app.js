import React from 'react';
import ReactDOM from 'react-dom';
import sayHello from './sayHello.js';

var SayHello = React.createClass({
    render: function(){
        return <h1>
            Hello, {this.props.name}
            </h1>;
    }
});

ReactDOM.render(
    <SayHello name='world'/>,
    document.getElementById('app')
);