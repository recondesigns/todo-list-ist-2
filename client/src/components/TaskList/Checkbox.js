import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { CurrentUserContext } from '../../providers/Store'
import checkboxDefault from '../../assets/checkbox-default.svg'
import checkboxChecked from '../../assets/checkbox-checked.svg'

const CheckboxContainer = styled.div`
    margin: 0px 8px 0px 0px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 16px;
        height: 16px;
    }
`

export default function Checkbox(props) {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const { name, tasks, id } = currentUser

    const { completed, tasktitle } = props

    let itemTitle = tasktitle.toLowerCase()

    function setIcon() {
        if (completed === false) {
            return <img src={checkboxDefault} alt={`Mark task as complete.`} />
        } else if (completed === true) {
            return <img src={checkboxChecked} alt={`Mark task as not complete.`} />
        }
    }

    function updateTask() {

        const updatedUser = {
            name: name,
            newTasks: tasks,
            id: id
        }

        const { newTasks } = updatedUser

        const userObjToSend = {
            name: name,
            tasks: newTasks,
            id: id
        }

        function setContext() {
            axios.get(`http://localhost:8000/users/${id}`).then((res) => {
                const {name, tasks, _id } = res.data
                const newObj = {
                    name: name,
                    tasks: tasks,
                    id: _id
                }
                setCurrentUser(newObj)
            })
        }

        for (let i = newTasks.length -1; i >= 0; --i) {
            const { tasktitle } = newTasks[i]

            if (tasktitle.toLowerCase() === itemTitle) {
                if (updatedUser.newTasks[i].completed === false) {
                    updatedUser.newTasks[i].completed = true
                    axios.post(`http://localhost:8000/users/update/${userObjToSend.id}`, userObjToSend).then((res) => {
                    }).then(() => setContext())
                } else if (updatedUser.newTasks[i].completed === true) {
                    updatedUser.newTasks[i].completed = false
                    axios.post(`http://localhost:8000/users/update/${userObjToSend.id}`, userObjToSend).then((res) => {
                    }).then(() => setContext())
                }
            }
        }
    }

    let icon = setIcon()

return (
        <CheckboxContainer onClick={updateTask}>
            {icon}
        </CheckboxContainer>
    )
}