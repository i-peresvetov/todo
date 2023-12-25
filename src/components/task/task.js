import React, { Component } from 'react';

const createdTime = '17 seconds'

export default class Task extends Component {

    state = {
        done: this.props.done,
        createdTime: createdTime
    }

    onLabelClick = () => {
        console.log('click')        
        this.setState(({ done }) => {
          return {
            done: !done,
          };
        });        
      };

    render() {
        const {label, onDelete} = this.props
        const {done} = this.state
        let doneClass = ''
        if (done) {
            doneClass += ' completed'
        }

        return (
            <li className={doneClass}>
                <div className='view'>
                    <input
                     type='checkbox'
                     className='toggle'
                     onChange={this.onLabelClick}
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