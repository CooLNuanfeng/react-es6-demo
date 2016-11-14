import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import CommentList from '../components/CommentList/commentList.js';

var data = [
    {
        src : 'http://placehold.it/60x60?text=a',
        text : 'hello world',
        time : '2016-05-23'
    },{
        src : 'http://placehold.it/60x60?text=b',
        text : 'hello Rect',
        time : '2016-05-20'
    }
];

var App = (props)=>{
    return (
        <CommentList data={data}/>
    )
}

ReactDOM.render(<App/>,document.getElementById('app'));
