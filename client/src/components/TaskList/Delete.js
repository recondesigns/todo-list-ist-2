import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { CurrentUserContext } from '../../providers/Store'
import deleteIcon from '../../assets/item-delete.svg'

const DeleteContainer = styled.div`
    margin: 0px 0px 0px 8px;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 20px;
        height: 20px;
    }
`

export default function Delete(props) {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const { name, tasks, id } = currentUser
    const editTasks = tasks

    function getNewUser() {
        axios.get(`http://localhost:5000/users/${id}`).then((res) => {
            const { name, tasks, _id } = res.data

            const newObj = {
                name: name,
                tasks: tasks,
                id: _id
            }
            setCurrentUser(newObj)
        })
    }

    function deleteTask() {
        const { tasktitle } = props
        let itemTitle = tasktitle.toLowerCase()

        for (let idx = editTasks.length -1; idx >= 0; --idx) {
            if (editTasks[idx].tasktitle.toLowerCase() === itemTitle) {
                editTasks.splice(idx, 1)
            }
        }

        const updatedUser = {
            name: name,
            tasks: editTasks,
            id: id
        }

        axios.post(`http://localhost:5000/users/update/${id}`, updatedUser).then((res) => {
            console.log(res.data)
        }).then(getNewUser)
    }

    return (
        <DeleteContainer onClick={deleteTask}>
            <img src={deleteIcon} alt={`Delete task.`} />
        </DeleteContainer>
    )
}
