import React,{Component} from 'react';
import RouterMap from "../routes/index";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from "../actions/userInfo";
import {getStorage} from "../local/index"

class App extends Component{
    constructor(){
        super();
        this.state = {
            done:false
        }
    }
    componentDidMount(){
        //先在本地查找，是否存储过localstorage名字叫cityName的
        //1.没有cityName，赋予一个默认的值  杭州
        //2.将当前的城市放到redux
        //3.
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '杭州'
        }

        //页面加载后 设置一个城市
        this.props.userActions.update({
            cityName
        })
        this.setState({
            done:true
        })
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


export default connect(
    state => {
        return {

        }
    }, //mapStateToProps
    dispatch => {
        return {
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)

