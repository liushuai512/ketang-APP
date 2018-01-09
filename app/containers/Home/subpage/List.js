import React,{Component} from 'react';
import {getList} from "../../../fetch/home/index";
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/LoadMore/index";

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            data:[],
            hasMore:true,
            page:0, //页码
            isLoading:true//是否正在加载
        }
    }
    componentDidMount(){
        this.processData(getList(this.props.cityName,0));
    }
    //处理成功后的逻辑
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data}) => {
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoading:false
            })
        })
    }

    loadMore(){
        console.log('log')

        this.setState({
            page:this.state.page+1,
            isLoading:true //每次加载更多时，状态都应该为正数
        },()=>{//这里可以获取到最新的页码的状态
            this.processData(getList(this.props.cityName,this.props.page));

        })
    }
    render(){
        return (
            <div style={{marginTop:'5%',color:'#666'}}>
                <h3 style={{marginLeft:'4%'}}>产品世界</h3>
                {
                    this.state.data.length?
                    <ListComponent data={this.state.data}/>
                    :<div>正在加载</div>
                }
                <LoadMore
                    hasMore={this.state.hasMore}
                    loadMore={this.loadMore.bind(this)}
                    isLoading={this.state.isLoading}/>

            </div>
        )
    }
}