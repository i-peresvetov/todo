import React from 'react';

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

export default Footer