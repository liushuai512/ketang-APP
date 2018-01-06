import React,{Component} from 'react';
import RouterMap from "../routes/index";

export default class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                done:true
            })
        },3000)

    }
    render(){
        return (
            <div>
                {/* 如果路径为／ RouterMap 就会变为Home组件*/}
                {this.state.done?<RouterMap/>:<div>正在加载</div>}
            </div>
        )
    }

}