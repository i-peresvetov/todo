import React from 'react';

const TodoListItem = ({label, state}) => {
    let createdTime = '17 seconds'

    return (
        <li className={state}>
            <div className='view'>
                <input type='checkbox' className='toggle'/>
                <label>
                    <span className='description'>{label}</span>
                    <span className='created'>created {createdTime} ago</span>
                </label>
                <button className='icon icon-edit'></button>
                <button className='icon icon-destroy'></button>
            </div>
            <input type='text' className='edit' value={label}/>
        </li>
    )
}

export default TodoListItem