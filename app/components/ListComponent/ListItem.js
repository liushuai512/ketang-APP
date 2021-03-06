import React,{Component} from 'react';
import './index.less'
export default class ListItem extends Component{
    render(){
        let {img,title,subTitle,distance,price,number,id} = this.props.data;
        return (
            <div className="list-item">
                <img src={img} alt=""/>
                <div className="list-item-content">
                    <h4>{title}</h4>
                    <p style={{width:'180px'}}>{subTitle}</p>
                    <div>
                        <strong>¥{price}</strong>
                        <span>已售 {number}</span>
                    </div>
                    <span className="distance">{distance}</span>
                </div>
            </div>
        )
    }
}