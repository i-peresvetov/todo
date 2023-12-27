import React from 'react';
import PropTypes from 'prop-types'

import Task from '../task';
import './task-list.css'

const TaskList = ({todos, onDelete, onToggleComplite, filterStatus}) => {

    const tasks = todos.map((task)=>{
        return (
            <Task
             label={task.label}
             done={task.done}
             key={task.id}
             onDelete={() => onDelete(task.id)}
             onToggleComplite={()=> onToggleComplite(task.id)}
             filterStatus={filterStatus}
             createDate={task.createDate}
            />
        )
    })

    return (
        <ul className='todo-list'>
            {tasks}
        </ul>
    )
}

TaskList.defaultProps = {    
    filterStatus: 'All'
}

TaskList.propsTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleComplite: PropTypes.func.isRequired,
    filterStatus: PropTypes.string
}

export default TaskList