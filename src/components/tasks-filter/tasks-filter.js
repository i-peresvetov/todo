import React from 'react'
import PropTypes from 'prop-types'

function FilterButton({ name, filterStatus, onToggleFilter }) {
  let selectStatus
  if (filterStatus === name) selectStatus = 'selected'
  return (
    <li>
      <button type="button" onClick={onToggleFilter} className={selectStatus}>
        {name}
      </button>
    </li>
  )
}

FilterButton.defaultProps = {
  filterStatus: 'All',
}

FilterButton.propTypes = {
  name: PropTypes.string.isRequired,
  filterStatus: PropTypes.string,
  onToggleFilter: PropTypes.func.isRequired,
}

function TasksFilter({ filterStatus, onToggleFilter }) {
  const filterNames = [
    { name: 'All', id: 1 },
    { name: 'Active', id: 2 },
    { name: 'Completed', id: 3 },
  ]

  const filterButtons = filterNames.map(({ filterName, id }) => {
    return (
      <FilterButton
        name={filterName}
        filterStatus={filterStatus}
        onToggleFilter={() => onToggleFilter(filterName)}
        key={id}
      />
    )
  })

  return <ul className="filters">{filterButtons}</ul>
}

TasksFilter.defaultProps = {
  filterStatus: 'All',
}

TasksFilter.propTypes = {
  filterStatus: PropTypes.string,
  onToggleFilter: PropTypes.func.isRequired,
}

export default TasksFilter
