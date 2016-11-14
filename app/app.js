import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from '../components/HelloMessage/hello.js';


const App = (props) => {
    return (
        <HelloMessage name="world!!!" />
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));
