import React,{Component} from 'react';
import './index.less';
export default class LoadMore extends Component{
    render(){
        return (


            <div className="has-more" >
                {this.props.hasMore?
                    <div onClick={this.loadMore.bind(this)} >加载更多</div>
                    :<div>我是有底线的</div>}
            </div>


        )
    }
    componentDidMount(){
        //绑定滚动事件
        this.fn = () => {
            clearTimeout(this.timer);//清掉旧的定时器
            this.timer = setTimeout(()=>{
                console.log('滚动');

                //先判断是否正在加载
                if(this.props.isLoading){
                    return
                }
                //判断按钮距离屏幕顶端的高度 和 可视窗口的高度
                /*let screen = window.screen.height;
                let top = this.refs.more.getBoundingClientRect().top;//获取当前元素的位置（上／下／左／犹）

                if(top<screen){//如果按钮进入可视窗口则加载更多 即可
                    this.props.LoadMore();
                }
                console.log(top);*/
                console.log(this.refs.more)
            },50)
        }
        window.addEventListener('scroll',this.fn)
    }
    componentWillUnmout(){
        //移除滚动事件
        window.removeEventListener('scroll',this.fn)
    }
    loadMore(){//调用父级传递过来的加载更多函数
        if(this.props.isLoading){
            return
        }
        this.props.loadMore()
    }

}
