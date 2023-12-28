import React from 'react';
import PropTypes from 'prop-types'

import Task from '../task';
import './task-list.css'

const TaskList = ({todos, onDelete, onToggleComplite, filterStatus, setTimerId, changeLabel}) => {

    const tasks = todos.map((task)=>{
        return (
            <Task
             label={task.label}
             done={task.done}
             key={task.id}
             id={task.id}
             onDelete={() => onDelete(task.id)}
             onToggleComplite={()=> onToggleComplite(task.id)}
             filterStatus={filterStatus}
             createDate={task.createDate}
             setTimerId={setTimerId}
             changeLabel={changeLabel}
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
    filterStatus: 'All',
    createDate: Date.now()
}

TaskList.propsTypes = {
    todos: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggleComplite: PropTypes.func.isRequired,
    filterStatus: PropTypes.string,
    createDate: PropTypes.number,
    setTimerId: PropTypes.func.isRequired,
    changeLabel: PropTypes.func.isRequired
}

export default TaskList