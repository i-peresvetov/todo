import React from 'react'
import PropTypes from 'prop-types'

import FilterButton from '../filter-button/filter-button'

import './tasks-filter.css'

export default function TasksFilter({ filterStatus, onToggleFilter }) {
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
