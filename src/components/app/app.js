import React from 'react';

import AppHeader from "../app-header/"
import Main from '../main';

import './app.css'

const App = () => {
    return (
        <section className='todoapp'>
            <AppHeader/>
            <Main/>
        </section>
    )
}

export default App