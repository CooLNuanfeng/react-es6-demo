import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'name' : this.props.name
        };
    }
    componentWillReceiveProps(nextporps){
        console.log('组件修改了props componentWillReceiveProps');
        this.setState({
            'name' : nextporps.name
        })
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log('组件将要更新时的控制函数 shouldComponentUpdate',nextstate,nextprops);
        console.log(this.state.name == nextstate.name);
        if(this.state.name == nextstate.name){
            return false;
        }else{
            return true;
        }
    }
    componentWillUpdate(){
        console.log('组件将要更新 componentWillUpdate');
    }
    componentWillMount(){
        console.log('组件将要渲染 componentWillMount');
    }
    render() {
        console.log('组件渲染 render');
        return (
            <div>
                <h1>Hello world!!!</h1>
                <p onClick={this.clickFn.bind(this)}>{this.state.name}</p>
            </div>
        )
    }
    componentDidUpdate(){
        console.log('组件更新完成 componentDidUpdate');
    }
    componentDidMount(){
        console.log('组件渲染完成 componentDidMount');
    }
    componentWillUnmount(){
        console.log('组件将要卸载 componentWillUnmount');
    }
    clickFn(){
        this.setState({
            'name' : '点击p后的文本'
        },function(){
            console.log('组件 setState 后 clickFn change');
        });
    }
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : 'reday'
        }
    }
    render(){
        return(
            <div>
                <Hello name={this.state.text}/>
                <button onClick={this.changeFn.bind(this)}>change</button>
            </div>
        )
    }
    changeFn(){
        this.setState({
            text : '点击button后的文本'
        })
    }
}

ReactDOM.render(<App />,document.getElementById('app'));
