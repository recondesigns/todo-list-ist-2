import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import Delete from './Delete'

const ListItemContainer = styled.div`
    margin: 8px 0px 8px 0px;
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 16px;
    width: 343px;
    height: 56px;
    background: #FFFCF9;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
`

const ItemText = styled.p`
    margin: 0px;
    width: 100%;
    height: 24px;
    font-family: Aktiv Grotesk;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #263238;
`

export default function ListItem(props) {
    const { tasktitle, completed } = props
    
    return (
        <ListItemContainer>
            <Checkbox tasktitle={tasktitle} completed={completed} />
            <ItemText>{tasktitle}</ItemText>
            <Delete tasktitle={tasktitle} />
        </ListItemContainer>
    )
}