import React from 'react';

import TasksFilter from '../tasks-filter/tasks-filter';

const Footer = () => {
    let itemsLeft = 1
    return (
        <footer className='footer'>
            <span className='todo-count'>
                {itemsLeft} items left
            </span>
            <TasksFilter/>
            <button className='clear-completed'>
                Clear completed
            </button>
        </footer>
    )
}

export default Footer