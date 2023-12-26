import React from 'react';

const FilterButton = ({name, filterStatus, onToggleFilter}) => {
    let selectStatus
    if (filterStatus === name) selectStatus = 'selected'
    return (
        <li><button onClick={onToggleFilter} className={selectStatus}>{name}</button></li>
    )
}

const TasksFilter = ({filterStatus, onToggleFilter}) => {

    const filterNames = ['All', 'Active', 'Completed']

    const filterButtons = filterNames.map((filterName, key)=>{
        return (
            <FilterButton
             name={filterName}
             filterStatus={filterStatus}
             onToggleFilter={()=>onToggleFilter(filterName)}
             key={key+1}
           />
        )
    })

    return (
            <ul className='filters'>
                {filterButtons}
            </ul>
    )
}

export default TasksFilter