import React, { Component } from 'react'
import {
  BigComponent,
  CommonTitle,
  CssTest,
  Tab,
  Animation,
  Navbar,
  Jumbotron
} from '../components'

export default class App extends Component {
  state = {
    items: ['webpack','react','babel','npm'],
    navbars: ["主页", "项目介绍", "MOOC", "学方平台", "联系我们"]
  };
  render() {
    const states = this.state;

    return (
      <div className="box">
        <Navbar items={states.navbars} />
        <Jumbotron />
        {/*<BigComponent />*/}
        {/*<CommonTitle title="一个简单的按钮mixin示例" />*/}
        {/*<CssTest />*/}
        {/*<CommonTitle title="图片转换" />*/}
        {/*<BigComponent />*/}
        {/*<CommonTitle title="Animation示例，点击列表删除" />*/}
        {/*<Animation />*/}
        {/*<CommonTitle title="Tab示例" />*/}
        {/*<Tab items={states.items} />*/}
      </div>
    )
  }
}