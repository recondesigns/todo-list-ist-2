import React, { useContext } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { CurrentUserContext } from '../../providers/Store'
import { Button } from '../Button'
import landingIllustration from '../../assets/illustration1.svg'
import infoIcon from '../../assets/info-icon.svg'

const LandingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`

const LandingH1 = styled.h1`
    margin: 0px 0px 24px 0px;
    height: 96px;
    font-family: Aktiv Grotesk Ex;
    font-style: normal;
    font-weight: bold;
    font-size: 44px;
    line-height: 48px;
    display: flex;
    align-items: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(38, 50, 56, 0.8);
`

const H2Container = styled.div`
    margin: 32px 0px 24px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
        width: 32px;
        height: 32px;
    }

    & > h2 {
        margin: 0px 0px 0px 0px;
        font-family: Aktiv Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: right;
        letter-spacing: 0.02em;
        color: #263238;
    }
`

const ButtonContainer = styled.div`
    margin: 40px 0px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledButton = styled(Button)`
    background: blue;
    color: blue;
`

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledInput = styled.input`
    padding: 8px 16px 8px 16px;
    width: 328px;
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

export default function Landing() {
    const [, setCurrentUser] = useContext(CurrentUserContext)
    let loginName = ''

    function getLoginName(e) {
        const { value } = e.target
        loginName = value
    }

    function logIn() {
        const url = `http://localhost:8000/users`
        axios({
            method: "get",
            url: url,
            responseType: "json"
        }).then ((res) => {
                res.data.forEach((user => {
                const { name } = user
                if (name.toLowerCase() === loginName.toLowerCase()) {
                    const { tasks, _id } = user
                    const updatedCurrentUser = {
                        name: name,
                        tasks: tasks,
                        id: _id
                    }
                    setCurrentUser(updatedCurrentUser)
                }
            }))
            // console.log(res.data)
        })
        // axios.get(`http://localhost:8000/users`).then((res) => {
        //     res.data.forEach((user => {
        //         const { name } = user
        //         if (name.toLowerCase() === loginName.toLowerCase()) {
        //             const { tasks, _id } = user
        //             const updatedCurrentUser = {
        //                 name: name,
        //                 tasks: tasks,
        //                 id: _id
        //             }
        //             setCurrentUser(updatedCurrentUser)
        //         }
        //     }))
        // })
    }

    return (
        <LandingContainer>
            <LandingH1>{'TODO LIST-IST'}</LandingH1>
            <img src={landingIllustration} alt={'Todo list illustration.'} />
            <H2Container>
                <h2>Sign In</h2>
                <img src={infoIcon} alt={'Click for more information.'} />
            </H2Container>
            <InputContainer>
                <StyledInput onChange={getLoginName} />
            </InputContainer>
            <ButtonContainer>
                <StyledButton click={logIn} buttonText={'Sign In'} />
            </ButtonContainer>
        </LandingContainer>
    )
}