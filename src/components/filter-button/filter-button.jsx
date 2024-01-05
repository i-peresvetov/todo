import React from 'react'
import PropTypes from 'prop-types'

import './filter-button.css'

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
