import React, { Component } from 'react';

export default class NewTaskForm extends Component {

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