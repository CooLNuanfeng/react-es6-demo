import React,{Component} from 'react';

export default class ItemList extends Component{
    render(){
        return (
            <li className="c-item">
                <img src={this.props.item.src}  width="60" height="60"/>
                <div className="c-box">
                    <h4>{this.props.item.text}</h4>
                    <p>时间：{this.props.item.time}</p>
                </div>
            </li>
        )
    }
}
