import React, { Component } from "react";
// import { formatDistanceToNow } from "date-fns";

import NewTaskForm from "../new-task-form"
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

// timeStr: formatDistanceToNow(this.props.createDate, { includeSeconds: true })

export default class App extends Component {

  taskId = 10

  state = {
    todoDate: [
      {label: "Completed task", done: true, id: 1, createDate: Date.now(), timerId: undefined},
      {label: "Editing task", done: false, id: 2, createDate: Date.now(), timerId: undefined},
      {label: "Active task", done: false, id: 3, createDate: Date.now(), timerId: undefined},
    ],
    filterStatus: 'All'
  };

  createTask(text) {
    return {
      label: text,
      done: false,
      id: this.taskId++,
      createDate: Date.now()
    }
  }

  changePropOfTask(todoDate, id, propName, newValue) {
    const indexOfTask = todoDate.findIndex((task)=>task.id === id)

    const oldTask = todoDate[indexOfTask]
    let newTask
    if (newValue) {
      newTask = {...oldTask, [propName]: newValue}
      
    } else {
      newTask = {...oldTask, [propName]: !oldTask[propName]}
    }    

    const newTodoDate = [...todoDate]
    newTodoDate.splice(indexOfTask, 1, newTask)

    return newTodoDate
  }

  addTask = (text) => {
    const newTask = this.createTask(text)

    this.setState(({todoDate})=>{
      const newTodoDate = [...todoDate, newTask]
      return {
        todoDate: newTodoDate
      }
    })
  }

  deleteTask = (id) => {
    this.setState(({todoDate})=>{
      const indexOfTask = todoDate.findIndex((task)=>task.id === id)

      clearInterval(todoDate[indexOfTask].timerId)

      const newTodoDate = [...todoDate]
      newTodoDate.splice(indexOfTask, 1)

      return {
        todoDate: newTodoDate
      }
    })
  }

  clearComplited = () => {
    this.state.todoDate.forEach((task)=>{
      clearInterval(task.timerId)
    })
    
    this.setState(({todoDate})=>{
      const newTodoDate = todoDate.filter((task)=>task.done === false)

      return {
        todoDate: newTodoDate
      }
    })
  }

  toggleComplite = (id) => {
    this.setState(({todoDate})=>{
      return {
        todoDate: this.changePropOfTask(todoDate, id, 'done')
      }
    })
  }

  toggleFilter = (filterName) => {    
    this.setState(()=>{
      return {
        filterStatus: filterName
      }
    })
  }

  setTimerId = (id, newTimerId) => {
    this.setState(({todoDate})=>{
      return {
        todoDate: this.changePropOfTask(todoDate, id, 'timerId', newTimerId)
      }
    })
  }

  changeLabel = (id, newLabel) => {
    if (newLabel === '') {
      this.deleteTask(id)
    } else {
      this.setState(({todoDate})=>{
        return {
          todoDate: this.changePropOfTask(todoDate, id, 'label', newLabel)
        }
      })
    }
  }

  render() {

    const {todoDate, filterStatus} = this.state

    const tasksLeft = todoDate.filter((task)=>!task.done).length

    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAdd={this.addTask}/>
        </header>        
        <section className="main">
          <TaskList
           todos={this.state.todoDate}
           onDelete={this.deleteTask}
           onToggleComplite={this.toggleComplite}
           filterStatus={filterStatus}
           setTimerId={this.setTimerId}
           changeLabel={this.changeLabel}
          />
          <Footer
           onClearComplited={this.clearComplited}
           tasksLeft={tasksLeft}
           filterStatus={filterStatus}
           onToggleFilter={this.toggleFilter}
          />
        </section>
      </section>
    );
  }
}
