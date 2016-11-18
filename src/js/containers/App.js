import React, { Component } from 'react'
import {
  BigComponent,
  CommonTitle,
  CssTest,
  Tab,
  Animation,
  IndexNav
} from '../components'

export default class App extends Component {
  state = {
    items: ['webpack','react','babel','npm'],
  };
  render() {

    return (
      <div className="box">
        <IndexNav />
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