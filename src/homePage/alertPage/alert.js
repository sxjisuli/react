import React, { Component } from 'react'

import { Router, Route, Link } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './alert.css'

export default class Alert extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
     
    }

    //在完成首次渲染之前调用（首次加载或刷新页面），根据url的hash值改变state，具体表现为侧边栏选中项与页面渲染页相对应
    componentWillMount() {

    }
    //完成渲染新的props或者state后调用（切换路由），路由变化引发hash值变化，通过hash值与之前
    //状态属性作相应比较，如有变化则改变state，以达到侧边栏选中项与页面渲染页相对应
    componentDidUpdate(prevProps, prevState) {
    
    }
    render() {
        return (
            <div className="homePage">
              <section>
                这是快讯页面
              </section>
            </div>
        )
    }
}
