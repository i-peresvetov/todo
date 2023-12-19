import React from 'react';

import TodoList from '../todo-list';
import MainFooter from '../main-footer';

const Main = () => {
    return (
        <section className='main'>
            <TodoList/>
            <MainFooter/>
        </section>
    )
}

export default Main