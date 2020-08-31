import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../providers/Store'
import ListItem from './ListItem'

const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function TaskList() {
    const [currentUser] = useContext(CurrentUserContext)
    const { tasks } = currentUser

    function setList() {
        let items = tasks.map((task, idx) => {
            const { tasktitle, completed } = task
            return <ListItem key={idx} tasktitle={tasktitle} completed={completed} />
        })
        return items
    }

    let list = setList()

return (
        <TaskListContainer>
            {list}
        </TaskListContainer>
    )
}