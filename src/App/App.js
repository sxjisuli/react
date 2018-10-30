import React, { Component } from 'react'

import { Router, Route, Link ,hashHistory} from 'react-router'

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
                activeUrl: "../assets/icon/news.png",
                 routerUrl: "/news"
            }, {
                name: "快讯",
                id: 2,
                imgUrl: "../assets/icon/alertsgrey.png",
                activeUrl: "../assets/icon/alerts.png",
                routerUrl: "/alerts"
            }, {
                name: "行情",
                id: 3,
                imgUrl: "../assets/icon/marketgrey.png",
                activeUrl: "../assets/icon/market.png",
                routerUrl: "/market"
            }, {
                name: "我的",
                id: 4,
                imgUrl: "../assets/icon/mygrey.png",
                activeUrl: "../assets/icon/my.png",
                routerUrl: "/myhomepage"
            }],
            currentIndex: 1
        }
    }
    tabChoiced(id,routerUrl) {
         sessionStorage.setItem('currentindex', id)
        this.setState({
            currentIndex: id
        })
        if(id==4){
            var data = {id:3,name:'sam',age:36};
            var path = {
                    pathname:routerUrl,
                    state:data,
                }
        }else{
            var path = {
                    pathname:routerUrl
                } 
        }
        hashHistory.push(path)
    }
    //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
    componentWillMount() {
        console.log(1)
        console.log(sessionStorage.getItem('currentindex'))
            if(sessionStorage.getItem('currentindex')){
                this.setState({
                    currentIndex:sessionStorage.getItem('currentindex')
                })
            }else{
                 this.setState({
                    currentIndex:1
                })
            }
        }
    componentDidUpdate(prevProps, prevState) {
        console.log(2)
    }
    render() {
        console.log(this.state.currentIndex)
        var _this = this
        var footUrl = this.state.tabName.map((val, index) => {
            // console.log(val)
            return <li key = { index } onClick = { this.tabChoiced.bind(_this, val.id,val.routerUrl) } >
                <img src = { this.state.currentIndex === val.id ? val.activeUrl : val.imgUrl } alt = ""/>
                <span className = { this.state.currentIndex === val.id ? 'activeclass' : 'imgclass' } > { val.name } </span></li>
        })
        return ( 
            <div className = "homePage">
                <section>
                    <div className = "mainBox" > { this.props.children } </div> 
                </section>
                <footer>
                    <ul className = "footIcon" > { footUrl } </ul> 
                </footer> 
            </div>
        )
    }
}