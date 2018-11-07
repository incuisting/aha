import React, { Component } from 'react'
import fro from '../1507802320.jpg'
import style from './app.css'

console.log('style', style)
class App extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <h1>Welcome to my dark side</h1>
        <img src={fro} />
      </div>
    )
  }
}
export default App
