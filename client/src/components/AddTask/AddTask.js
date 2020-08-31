import React, { useContext } from 'react'
import { CurrentUserContext } from '../../providers/Store'
import styled from 'styled-components'
import axios from 'axios'
import addTaskDefault from '../../assets/add-task-default.svg'

const AddTaskContainer = styled.div`
    margin: 40px 0px 0px 0px;
`

const Label = styled.label`
    margin: 0px 0px 16px 0px;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #263238;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;

    & > img {
        margin: 0px 16px 0px 0px;
        width: 32px;
        height: 32px;
    }
`

const InputContainer = styled.div`
    padding: 8px 16px 8px 16px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledInput = styled.input`
    padding: 8px 16px 8px 16px;
    width: 100%;
    height: 40px;
    border: 1px solid rgba(64, 123, 255, 0.6);
    box-sizing: border-box;
    border-radius: 4px;
    font-family: Aktiv Grotesk;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #263238;
`

export default function AddTask(props) {
    const [, setCurrentUser] = useContext(CurrentUserContext)
    const { userName, userTasks, userId } = props

    let updatedUserObj  =  {name: userName, tasks: userTasks, id: userId}
    let newTaskObj = {tasktitle: '', completed: false}

    function getNewTask(e) {
        const { value } = e.target
        newTaskObj.tasktitle = value
    }

    function addNewTask() {
        updatedUserObj.tasks.push(newTaskObj)

        axios.post(`http://localhost:8000/users/update/${userId}`, updatedUserObj ).then((res) => {
            axios.get(`http://localhost:8000/users/${userId}`).then((res) => {
                setCurrentUser(res.data)
            })
        }) 
    }

    return (
        <AddTaskContainer>
            <Label>{'Create a task'}</Label>
            <Wrapper>
                <img onClick={addNewTask} src={addTaskDefault} alt={'Add task.'} />
                <InputContainer>
                    <StyledInput onChange={getNewTask} />
                </InputContainer>
            </Wrapper>
        </AddTaskContainer>
    )
}