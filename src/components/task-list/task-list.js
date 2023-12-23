import React from 'react';

import Task from '../task';
import './task-list.css'

const TaskList = ({todos}) => {

    const elems = todos.map((item)=>{
        return (
            <Task
             label={item.label}
             activationStatus={item.activationStatus}/>
        )
    })

    return (
        <ul className='todo-list'>
            {/* <TodoListItem label='Completed task' state='completed' />
            <TodoListItem label='Editing task' state='editing' />
            <TodoListItem label='Active task' state='' /> */}
            {elems}
        </ul>
    )
}

export default TaskList