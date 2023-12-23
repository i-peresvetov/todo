import React, { Component } from 'react';

const createdTime = '17 seconds'

export default class Task extends Component {

    state = {
        activationStatus: this.props.activationStatus,
        createdTime: createdTime
    }

    render() {
        const {label} = this.props
        const {activationStatus, createdTime} = this.state

        return (
            <li className={activationStatus}>
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
}