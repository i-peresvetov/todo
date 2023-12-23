import React, { Component } from 'react';

import AppHeader from "../app-header/"
import TaskList from '../task-list';
import Footer from '../footer';


import './app.css'

export default class App extends Component {

    state = {
        todoDate: [
            {label: 'Completed task', done: true, id: 1},
            {label: 'Editing task', done: false, id: 2},
            {label: 'Active task', done: false, id: 3}
        ]
    }

    render() {
        return (
            <section className='todoapp'>
                <AppHeader/>
                <section className='main'>
                    <TaskList
                     todos={this.state.todoDate}/>
                    <Footer/>
                </section>
            </section>
        )
    }
}