import React from 'react'
import styled from 'styled-components'
import { UserIcon } from './UserIcon'

const HeaderContainer = styled.div`
    padding: 8px 8px 8px 8px;
    display: flex;
    justify-content: flex-end;
    border-radius: 4px;
`

export default function Header() {

    return (
        <HeaderContainer>
            <UserIcon />
        </HeaderContainer>
    )
}