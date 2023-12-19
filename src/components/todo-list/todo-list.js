import React from 'react';

import TodoListItem from '../todo-list-item';

const TodoList = () => {
    return (
        <ul className='todo-list'>
            <TodoListItem label='Completed task' state='completed' />
            <TodoListItem label='Editing task' state='editing' />
            <TodoListItem label='Active task' state='' />
        </ul>
    )
}

export default TodoList