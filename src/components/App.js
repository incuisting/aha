import React, { Component } from 'react'
import fro from '../1507802320.jpg'
import style from './app.css'
import lessStyle from './app.less'
import scssStyle from './app.scss'
class App extends Component {
  render() {
    return (
      <div>
        <h1 className={style.text}>Welcome to my dark side</h1>
        <h1 className={lessStyle.lessContainer}>Welcome to my dark side</h1>
        <h1 className={scssStyle.sassContainer}>Welcome to my dark side</h1>
        <img src={fro} />
      </div>
    )
  }
}
export default App
