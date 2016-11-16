import React from 'react';
import ReactDom from 'react-dom';

import '../templates/html.jade';

import CommentList from '../components/CommentList/commentList.js'


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


ReactDom.render(<CommentList data={data}/> ,document.getElementById('main'));
