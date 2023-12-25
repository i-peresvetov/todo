import React, { Component } from "react";

// import AppHeader from "../app-header/";
import NewTaskForm from "../new-task-form"
import TaskList from "../task-list";
import Footer from "../footer";

import "./app.css";

export default class App extends Component {
  state = {
    todoDate: [
      { label: "Completed task", done: true, id: 1 },
      { label: "Editing task", done: false, id: 2 },
      { label: "Active task", done: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({todoDate})=>{
      const indexOfTodoDate = todoDate.findIndex((task)=>task.id === id)

      const newTodoDate = [
        ...todoDate.slice(0, indexOfTodoDate),
        ...todoDate.slice(indexOfTodoDate + 1)
      ]

      return {
        todoDate: newTodoDate
      }
    })
  }

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm/>
        </header>        
        <section className="main">
          <TaskList
           todos={this.state.todoDate}
           onDelete={this.deleteItem}/>
          <Footer />
        </section>
      </section>
    );
  }
}
