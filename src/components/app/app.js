import React, { Component } from "react";

import NewTaskForm from "../new-task-form"
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

export default class App extends Component {

  taskId = 10

  state = {
    todoDate: [
      {label: "Completed task", done: true, id: 1, createDate: Date.now()},
      {label: "Editing task", done: false, id: 2, createDate: Date.now()},
      {label: "Active task", done: false, id: 3, createDate: Date.now()},
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

  addTask = (text) => {
    const newTask = this.createTask(text)

    this.setState(({todoDate})=>{
      const newTodoDate = [...todoDate, newTask]
      return {todoDate: newTodoDate}
    })
  }

  deleteTask = (id) => {
    this.setState(({todoDate})=>{
      const indexOfTask = todoDate.findIndex((task)=>task.id === id)

      const newTodoDate = [...todoDate]
      newTodoDate.splice(indexOfTask, 1)

      return {
        todoDate: newTodoDate
      }
    })
  }

  clearComplited = () => {
    this.setState(({todoDate})=>{
      const newTodoDate = todoDate.filter((task)=>task.done === false)

      return {todoDate: newTodoDate}
    })
  }

  toggleComplite = (id) => {
    this.setState(({todoDate})=>{
      const indexOfTask = todoDate.findIndex((task)=>task.id === id)

      const oldTask = todoDate[indexOfTask]
      const newTask = {...oldTask, done: !oldTask.done}

      const newTodoDate = [...todoDate]
      newTodoDate.splice(indexOfTask, 1, newTask)
      
      return {
        todoDate: newTodoDate
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
