import React from 'react';
import PropTypes from 'prop-types'

import TasksFilter from '../tasks-filter/tasks-filter';

const Footer = ({onClearComplited, tasksLeft, filterStatus, onToggleFilter}) => {    
    return (
        <footer className='footer'>
            <span className='todo-count'>
                {tasksLeft} items left
            </span>
            <TasksFilter
             filterStatus={filterStatus}
             onToggleFilter={onToggleFilter}
            />
            <button className='clear-completed' onClick={onClearComplited}>
                Clear completed
            </button>
        </footer>
    )
}

Footer.defaultProps = {    
    tasksLeft: '0',
    filterStatus: 'All'    
}

Footer.propTypes = {
    onClearComplited: PropTypes.func.isRequired,
    tasksLeft: PropTypes.number,
    filterStatus: PropTypes.string,
    onToggleFilter: PropTypes.func.isRequired
}

export default Footer