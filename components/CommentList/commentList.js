import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import './commentList.scss';
import ItemList from './itemList.js';



class CommentList extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : []
        };
    }
    render(){
        this.state.data = this.props.data;
        return (
            <ul className="c-list">
                {
                    this.state.data.map((item,index)=>{
                        return (
                            <ItemList item={item} key={index}/>
                        )
                    })
                }
            </ul>
        )
    }
}

export default CommentList;
