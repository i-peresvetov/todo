import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {

  static propTypes = {
    onAdd: PropTypes.func.isRequired
  }

  state = {
    inputValue: ''
  }

  onValueChange = (e) => {    
    this.setState({
      inputValue: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onAdd(this.state.inputValue)
    this.setState({
      inputValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
         className="new-todo"
         placeholder="What needs to be done?"
         autoFocus
         onChange={this.onValueChange}
         value={this.state.inputValue}
        />
      </form>
    )
  }
}