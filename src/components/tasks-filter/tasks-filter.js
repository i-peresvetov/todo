import React from 'react'
import PropTypes from 'prop-types'

import './tasks-filter.css'

export default function FilterButton({ name, filterStatus, onToggleFilter }) {
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
    { filterName: 'All', id: 1 },
    { filterName: 'Active', id: 2 },
    { filterName: 'Completed', id: 3 },
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
