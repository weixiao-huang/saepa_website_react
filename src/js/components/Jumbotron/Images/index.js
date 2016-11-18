/**
 * Created by huangwx on 16-11-17.
 */
import React, { Component } from 'react'
import styles from './index.scss'

class Image extends Component {
  state = {
    style: {maxHeight: "500px"}
  };

  render () {
    return <div className={styles.img}></div>
  }
}

export default Image
