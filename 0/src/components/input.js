import React from 'react'
import {connect} from 'react-redux'
import { change_name } from '../actions'

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <input 
                type={this.props.type || 'text' } 
                name={this.props.name || ''} 
                value={this.state.value}
                onChange={this.handleChange}
                />
            </div>
        )
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({value: value});
        this.props.dispatch( change_name(value) )
    }

}

const mapStateToProps = (state) => {
    return {
      value: state.user.name
    }
  }

Input = connect(mapStateToProps)(Input)

export default Input