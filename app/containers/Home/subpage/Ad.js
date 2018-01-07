import React,{Component} from 'react';
import {getAd} from "../../../fetch/home";
import './indedx.less'

export default class Ad extends Component{
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.getAdData()
    }

    getAdData() {
        getAd().then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }

    render(){
        return (
            <div className="ad">
                <h3>前端书籍</h3>
                {this.state.data.length?this.state.data.map((item,index)=>(
                    <a href={item.link} key={index}>

                        <i>
                            {item.title}</i>
                        <img src={item.img} />

                    </a>
                )):<div>正在加载</div>
                }
            </div>
        )
    }
}