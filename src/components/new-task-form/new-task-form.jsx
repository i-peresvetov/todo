import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './new-task-form.css'

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
    }
  }

  onValueChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  onSubmit = (e) => {
    const { inputValue } = this.state
    const { onAdd } = this.props

    e.preventDefault()
    const newTaskName = inputValue.trim()

    if (newTaskName !== '') {
      onAdd(newTaskName)
    }

    this.setState({
      inputValue: '',
    })
  }

  render() {
    const { inputValue } = this.state

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          onChange={this.onValueChange}
          value={inputValue}
        />
      </form>
    )
  }
}

NewTaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
}
