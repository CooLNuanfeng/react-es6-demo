import React from 'react';
import ReactDom from 'react-dom';

require('../source/css/test.css');

class Hello extends React.Component{
    constructor(props){
        super(props);
        // this.setState({
        //     text : 'aaa'
        // });
        this.state = {
            text : this.props.name
        }
    }
    render(){
        return (
            <div>
                <h1>Hello !!!</h1>
                <p>{this.props.name}====>hello,  {this.state.text}</p>
            </div>
        )
    }
}

var oDiv = document.createElement('div');
oDiv.id="example";
document.body.appendChild(oDiv);
ReactDom.render(<Hello name="blue"/>,oDiv);
