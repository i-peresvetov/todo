import React, { Component } from 'react';

const createdTime = '17 seconds'

export default class Task extends Component {

    state = {
        // done: this.props.done,
        createdTime: createdTime
    }

    render() {
        const {label, onDelete, done, onToggleComplite, filterStatus} = this.props
        let doneClass = ''
        if (done) {
            doneClass += ' completed'
        }

        let isHidden = false
        switch(filterStatus) {
            case 'All':
                isHidden = false
                break
            case 'Completed':
                isHidden = !done
                break
            case 'Active':
                isHidden = done
                break
            default:
                console.log('Error!!!')
        }

        return (
            <li className={doneClass} hidden={isHidden}>
                <div className='view'>
                    <input
                     type='checkbox'
                     className='toggle'
                     onChange={onToggleComplite}
                     defaultChecked={done}/>
                    <label>
                        <span className='description'>{label}</span>
                        <span className='created'>created {createdTime} ago</span>
                    </label>
                    <button className='icon icon-edit'></button>
                    <button
                     className='icon icon-destroy'
                     onClick={onDelete}></button>
                </div>
                {/* <input type='text' className='edit' value={label}/> */}
                <input type='text' className='edit'/>
            </li>
        )
    }
}