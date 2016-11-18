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
        height: innerHeight
    };

    onResize() {
        this.setState({height: innerHeight});
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
                style={{ maxHeight: states.height }}
            >
                <Navbar items={states.bars} />
                <Jumbotron />
            </div>
        )
    }
}