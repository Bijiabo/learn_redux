import React from 'react'
import {connect} from 'react-redux'

class TestComponent extends React.Component {
    render() {
        return (
            <div>
                <p>TestComponent</p>
                <p>{this.props ? this.props.name : ''}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    console.log(state.user.name)
    return {
      name: state.user.name
    }
  }

TestComponent = connect(mapStateToProps)(TestComponent)

export default TestComponent