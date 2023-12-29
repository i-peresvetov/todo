import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timeStr: '0 seconds',
      editing: false,
    }
  }

  componentDidMount() {
    const { setTimerId, id } = this.props
    setTimerId(
      id,
      setInterval(() => this.updateTimeStr(), 1000)
    )
  }

  updateTimeStr = () => {
    this.setState(() => {
      const { createDate } = this.props
      return {
        timeStr: formatDistanceToNow(createDate, { includeSeconds: true }),
      }
    })
  }

  toggleEditing = () => {
    this.setState(({ editing }) => {
      return {
        editing: !editing,
      }
    })
  }

  onSubmit = (e) => {
    const { label, id, changeLabel } = this.props
    e.preventDefault()
    const trimedLable = label.trim()
    if (trimedLable !== '') {
      changeLabel(id, trimedLable)
      this.toggleEditing()
    }
  }

  onValueChange = (e) => {
    const { id, changeLabel } = this.props
    changeLabel(id, e.target.value)
  }

  render() {
    const { label, onDelete, done, onToggleComplite, filterStatus, id } = this.props

    const { timeStr, editing } = this.state

    let liClass = ''
    if (done) {
      liClass += ' completed'
    }

    if (editing) {
      liClass += ' editing'
    }

    let isHidden = false
    switch (filterStatus) {
      case 'All':
        isHidden = false
        break
      case 'Completed':
        isHidden = !done
        break
      case 'Active':
        isHidden = done
        break
      default:
        throw new Error('Не верный тип фильтра')
    }

    const inputId = `input-${id}`

    return (
      <li className={liClass} hidden={isHidden}>
        <div className="view">
          <input type="checkbox" className="toggle" onChange={onToggleComplite} defaultChecked={done} />
          <label htmlFor={inputId}>
            <span className="description">{label}</span>
            <span className="created">created {timeStr} ago</span>
          </label>
          <button aria-label="Редактировать" type="button" className="icon icon-edit" onClick={this.toggleEditing} />
          <button aria-label="Удалить" type="button" className="icon icon-destroy" onClick={onDelete} />
        </div>
        <form onSubmit={this.onSubmit}>
          <input type="text" id={inputId} className="edit" value={label} onChange={this.onValueChange} />
        </form>
      </li>
    )
  }
}

Task.defaultProps = {
  label: 'Задание',
  done: false,
  filterStatus: 'All',
  createDate: Date.now(),
}

Task.propTypes = {
  label: PropTypes.string,
  done: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleComplite: PropTypes.func.isRequired,
  filterStatus: PropTypes.string,
  createDate: PropTypes.number,
  setTimerId: PropTypes.func.isRequired,
  changeLabel: PropTypes.func.isRequired,
}

export default Task
