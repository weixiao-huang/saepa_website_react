/**
 * Created by huangwx on 16-11-17.
 */
import React, { Component } from 'react'
import styles from './index.scss'

export default class Navbar extends Component {
  state ={
    focused: 0
  };

  handleClick = (index) => this.setState({focused: index});

  render() {
    const { items } = this.props;
    const { focused } = this.state;
    return(
      <div className={"text-center " + styles.navbar}>
        <ul className={styles.root}>
          {items.map((item, index) =>
            <span>
              <span className={styles.point}>&middot;</span>
              <span
                  key={index}
                  className={focused == index ? styles.focus : styles.normal}
                  onClick={this.handleClick.bind(null, index)}
              >
                {item}
              </span>
            </span>
          )}
          <span className={styles.point}>&middot;</span>
        </ul>
      </div>
    )
  }
}