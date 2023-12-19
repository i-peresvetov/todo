import React from 'react';

const MainFooter = () => {
    let itemsLeft = 1
    return (
        <footer className='footer'>
            <span className='todo-count'>
                {itemsLeft} items left
            </span>
            <ul className='filters'>
                <li><button className='selected'>All</button></li>                
                <li><button>Active</button></li>
                <li><button>Completed</button></li>
            </ul>
            <button className='clear-completed'>
                Clear completed
            </button>
        </footer>
    )
}

export default MainFooter