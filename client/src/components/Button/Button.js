import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 216px;
    height: 48px;
    background: #05BD8D;
    border-radius: 4px;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #FFFCF9;
`

export default function Button(props) {
    const { buttonText, click } = props

    return (
        <StyledButton onClick={click}>
            {buttonText}
        </StyledButton>
    )
}