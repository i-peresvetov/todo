import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { formatDistanceToNow } from "date-fns";


export default class Task extends Component {

    state = {
        timeStr: '0 seconds', // можно посчитать по пропсу, что надо сделать?
        editing: false
    }

    static defaultProps = {
        label: 'Задание',
        done: false,
        filterStatus: 'All',
        createDate: Date.now()
    }

    static propTypes = {
        label: PropTypes.string,
        done: PropTypes.bool,
        id: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired,
        onToggleComplite: PropTypes.func.isRequired,
        filterStatus: PropTypes.string,
        createDate: PropTypes.number,
        setTimerId: PropTypes.func.isRequired,
        changeLabel: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.setTimerId(this.props.id, setInterval(()=>this.updateTimeStr(), 1000))
    }

    updateTimeStr = () => {
        this.setState(()=>{
            return {
                timeStr: formatDistanceToNow(this.props.createDate, { includeSeconds: true })
            }
        })
    }

    toggleEditing = () => {
        this.setState(({editing})=>{
            return {
                editing: !editing
            }
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        const trimedLable = this.props.label.trim()
        if (trimedLable !== '') {
            this.props.changeLabel(this.props.id, trimedLable)
            this.toggleEditing()
        } else {
            console.log('В вводе пустое значение') // подсвечивать инпут красным?..
        }
    }

    onValueChange = (e) => {    
        this.props.changeLabel(this.props.id, e.target.value)
    }

    render() {
        const {label, onDelete, done, onToggleComplite, filterStatus} = this.props

        const {timeStr, editing} = this.state
        
        let liClass = ''
        if (done) {
            liClass += ' completed'
        }

        if (editing) {
            liClass += ' editing'
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
                throw new Error('Не верный тип фильтра')
        }

        return (
            <li className={liClass} hidden={isHidden}>
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
                    <button
                     className='icon icon-edit'
                     onClick={this.toggleEditing}
                    ></button>
                    <button
                     className='icon icon-destroy'
                     onClick={onDelete}
                    ></button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input
                     type='text'
                     className='edit'
                     value={this.props.label}
                     onChange={this.onValueChange}
                    />
                </form>
            </li>
        )
    }
}