/**
 * Created by Mike Huang on 2016/11/19.
 */

import React, { Component } from 'react'
import styles from './index.scss'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'

export default class IndexNav extends Component {
  state = {
    bars: ["主页", "项目介绍", "MOOC", "学方平台", "联系我们"],
    maxHeight: innerHeight,
    imgUrl: "../../../images/协会logo.jpg",
    decShow: innerWidth > 1000
  };

  onResize() {
    this.setState({
      maxHeight: innerHeight,
      decShow: innerWidth > 1000
    });
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize.bind(this)); //notice .bind
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  render() {
    const states = this.state;
    return (
      <div
        className={styles.container}
        style={{ maxHeight: states.maxHeight }}
      >
        <div className={styles.left_box}></div>
        <div className={styles.right_img}>
          <img src={states.imgUrl} alt="SAEPA Logo"/>
        </div>
        <Navbar items={states.bars} />
        <Jumbotron />
      </div>
    )
  }
}