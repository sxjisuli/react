import React, { Component } from 'react'

import { Router, Route, Link } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabName: [{
                name: "新闻",
                id: 1,
                imgUrl: "../assets/icon/newgrey.png",
                activeUrl: "../assets/icon/news.png"
            }, {
                name: "快讯",
                id: 2,
                imgUrl: "../assets/icon/alertsgrey.png",
                activeUrl: "../assets/icon/alerts.png",
            }, {
                name: "行情",
                id: 3,
                imgUrl: "../assets/icon/marketgrey.png",
                activeUrl: "../assets/icon/market.png",
            }, {
                name: "我的",
                id: 4,
                imgUrl: "../assets/icon/mygrey.png",
                activeUrl: "../assets/icon/my.png",
            }],
            currentIndex:1
        }

    }
    tabChoiced(id){
        // console.log(id)
        this.setState({
             currentIndex:id
        })
    }

    //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
    componentWillMount() {

        }
        //完成渲染新的props或者state后调用（切换路由），路由变化引发hash值变化，通过hash值与之前
        //状态属性作相应比较，如有变化则改变state，以达到侧边栏选中项与页面渲染页相对应
    componentDidUpdate(prevProps, prevState) {

    }
    render() {
        var _this=this
          var footUrl=this.state.tabName.map((val,index)=>{
                        // console.log(val)
                        return <li key={index} onClick={this.tabChoiced.bind(_this,val.id)}>
                            <img src={this.state.currentIndex===val.id?val.activeUrl: val.imgUrl} alt=""/>
                            <span className={this.state.currentIndex===val.id?'activeclass': 'imgclass'}>{val.name}</span>
                        </li>
                    })
        return (
        <div className="homePage">
            <section>
                <div className = "mainBox"> { this.props.children } </div>
            </section> 
            <footer>
            <ul className = "footIcon">
                {footUrl}
             </ul>
            </footer> 
            </div>
        )
    }
}