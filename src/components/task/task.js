import React, { Component } from 'react';
import { formatDistanceToNow } from "date-fns";
import PropTypes from 'prop-types'

export default class Task extends Component {

    static defaultProps = {
        label: 'Задание',
        done: false,
        filterStatus: 'All',
        createDate: Date.now()
    }

    static propTypes = {
        label: PropTypes.string,
        done: PropTypes.bool,        
        onDelete: PropTypes.func.isRequired,
        onToggleComplite: PropTypes.func.isRequired,
        filterStatus: PropTypes.string,
        createDate: PropTypes.number
    }

    state = {
        timeStr: '0 seconds'
    }

    updateTimeStr = () => {
        this.setState(()=>{
            return {
                timeStr: formatDistanceToNow(this.props.createDate, { includeSeconds: true })
            }
        })
    }

    render() {
        const {label, onDelete, done, onToggleComplite, filterStatus} = this.props

        const {timeStr} = this.state

        let doneClass = ''
        if (done) {
            doneClass += ' completed'
        }

        setInterval(this.updateTimeStr, 1000)

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
                throw new Error('Не верный тип фильтра')
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
                        <span className='created'>created {timeStr} ago</span>
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