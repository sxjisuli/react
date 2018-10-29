import React from 'react'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'

import App from '../App/App.js'

import News from '../homePage/newsPage/newsPage.js'
import Mys from '../homePage/my/my.js'
import Market from '../homePage/market/market.js'
import Alert from '../homePage/alertPage/alert.js'

export default (
  <Router history={hashHistory} >
      <Route path="/" component={App}>
          <route path="news" component={News}></route>
          <route path="alerts" component={Alert}></route>
          <route path="market" component={Market}></route>
          <route path="myhomepage" component={Mys}></route>
      </Route>
  </Router>
)
