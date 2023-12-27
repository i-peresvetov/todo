import React from 'react';

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

export default TaskList