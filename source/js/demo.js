import React from 'react';
import ReactDOM from 'react-dom';

import '../sass/demo.scss';

class Hello extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'name' : this.props.name
        };
    }
    render() {
        return (
            <div>
                <h1>Hello world!!!</h1>
                <p>{this.state.name}</p>
            </div>
        )
    }
}

const App = (props) => {
  return (
    <div>
      <Hello/>
      <p>This is app</p>
    </div>
  );
}


ReactDOM.render(<Hello name="world"/>, document.getElementById('hello'));

ReactDOM.render(<App />, document.getElementById('app'));
