import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext } from '../../../providers/Store'
import notLoggedInUser from '../../../assets/header-user-icon-default.svg'
import loggedInUser from '../../../assets/header-user-icon-loggedIn.svg'

const UserIconContainer = styled.div`

`

export default function UserIcon() {
    const [currentUser] = useContext(CurrentUserContext)

    function setUserIcon() {
        if (currentUser === undefined || currentUser.name === '') {
            return <img src={notLoggedInUser} alt={'User is not logged in.'} />
        } else if (currentUser) {
            return <img src={loggedInUser} alt={'User is logged in.'} />
        }
    }

    let userIcon = setUserIcon()
   
    return (
        <UserIconContainer>
            {userIcon}
        </UserIconContainer>
    )
}