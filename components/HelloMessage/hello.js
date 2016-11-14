import React,{ Component } from 'react';
import ReactDOM from 'react-dom';

import './hello.scss';
import World from './world';

class HelloMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            'flag' : false
        };
    }
    clickBtn(param,e){
        var flag = !this.state.flag;
        this.setState({
            flag : flag
        });

        //ReactDOM.findDOMNode(this.refs.myInput).focus();
        // or
        this.refs.myInput.focus();
        console.log(param);
        //console.log(ReactDOM.findDOMNode(this),'ReactDOM');
        console.log(e.target.innerHTML);
        console.log(ReactDOM.findDOMNode(this.refs.myWorld),'findDOMNode get Dom');
    }
    render(){
        var text = this.state.flag ? 'hello world' : 'hello blue';
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <p><button onClick={this.clickBtn.bind(this,'AAA')}>click me change</button></p>
                <p>{text}</p>
                <p><input type="text" ref="myInput"/></p>
                <World ref="myWorld"/>
            </div>

        )
    }
}

module.exports = HelloMessage;
