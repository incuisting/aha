import React from 'react'
import { connect } from 'react-redux'
const Counter = props => {
  console.log('props', props)
  return (
    <div>
      <p>0</p>
      <button>+</button>
      <button>-</button>
    </div>
  )
}

export default connect()(Counter)
