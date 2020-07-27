import React from 'react'
import TaskList from './TaskList/TaskList'
import TableHeader from './TableHeader/TableHeader'
import classes from './TaskTable.module.scss'

const TaskTable = props => {
    return (
        <div className={classes.TaskTable}>
            <TableHeader header={props.header}/>
            <TaskList tasks={props.tasks}/>
        </div>
    )
}

export default TaskTable
