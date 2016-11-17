import React from 'react'
import styles from './index.scss'

export default ({title}) => (
    <div>
        <h1 className={"font-size-24 " + styles.toRed}>{title}</h1>
        <hr/>
    </div>
)