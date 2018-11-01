import React, { Component } from 'react'

import { Router, Route, Link } from 'react-router'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './newsPage.css'

export default class App extends Component {
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
    navBtnClick(num){
        console.log(num)
    }
    render() {
        return (
            <div className="homePage">
              <header>
                  <p className="newsTitle">新闻</p>
                  <div className="logoImg">
                      <img src="../../assets/icon/logo.png" alt=""/>
                  </div>
                  <div className="searchBox">
                      <input type="text"/>
                      <button><img src="../../assets/icon/searchIcon.png" alt=""/></button>
                  </div>
              </header>
              <section>
                  <div className="nav">
                      <ul>
                          <li onClick={this.navBtnClick.bind(this,1)}>新闻</li>
                          <li onClick={this.navBtnClick.bind(this,2)}>社区</li>
                          <li onClick={this.navBtnClick.bind(this,3)}>公众号</li>
                          <li onClick={this.navBtnClick.bind(this,4)}>微博</li>
                          <li onClick={this.navBtnClick.bind(this,5)}>峰会</li>
                      </ul>
                  </div>
                  <div className="content">
                        <div className="mainbox">
                            <div className="newsBox">
                                    新闻
                            </div>
                            <div className="community">
                                社区
                            </div>
                            <div className="publicNumber">
                                公众号
                            </div>
                            <div className="weiboBox">
                                微博
                            </div>
                            <div className="summit">
                                峰会
                            </div>
                        </div>
                  </div>
              </section>
            </div>
        )
    }
}
