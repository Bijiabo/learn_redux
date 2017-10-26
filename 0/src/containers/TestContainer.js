import React from 'react'
import { connect } from 'react-redux'
import { change_name } from '../actions'
import TestComponent from '../components/TestComponent'
import Input from '../components/input'

let TestContainer = ({ dispatch }) => {

  return (
    <div>
      <button onClick={e => {
        e.preventDefault()
        dispatch(change_name( (new Date()).toString() ))
      }}>
      Test Container Test Button
      </button>
      <TestComponent />
      <Input name="username" type="text" />
    </div>
  )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
      name: state.name
    }
  }

TestContainer = connect(mapStateToProps)(TestContainer)

export default TestContainer
