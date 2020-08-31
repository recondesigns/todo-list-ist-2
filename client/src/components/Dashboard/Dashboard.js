import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../providers/Store'
import { AddTask } from '../AddTask'
import { TaskList } from '../TaskList'
import { Button } from '../Button'

const DashboardContainer = styled.div`
    position: relative;
`

const StyledH3 = styled.h3`
    margin: 40px 0px 0px 0px;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #263238;
`

const WelcomeText = styled.p`
    margin: 8px 0px 0px 0px;
    color: red;
`

const LogoutContainer = styled.div`
    margin: 40px 0px 0px 0px;
    display: flex;
    justify-content: center;
`

export default function Dashboard() {
    const [currentUser, setCurrentUser] = useContext(CurrentUserContext)
    const { name, tasks, id } = currentUser

    function logOut() {
        setCurrentUser({name: '', tasks: [], id: ''})
    }
    
    return (
        <DashboardContainer>
            <WelcomeText>{`Welcome, ${name}.`}</WelcomeText>
            <AddTask userName={name} userTasks={tasks} userId={id} />
            <StyledH3>{'Tasks'}</StyledH3>
            <TaskList />
            <LogoutContainer>
                <Button click={logOut} buttonText={'Logout'} />
            </LogoutContainer>
        </DashboardContainer>
    )
}