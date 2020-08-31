import React, { useContext } from 'react'
import styled from 'styled-components'
import { CurrentUserContext} from '../providers/Store'
import { Header } from './Header'
import { Landing } from './Landing'
import { Dashboard } from './Dashboard'

const AppContainer = styled.div`
  padding: 40px 69px 40px 69px;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`

export default function App() {
  const [currentUser] = useContext(CurrentUserContext)

  function setViewComponent() {
    if (currentUser === undefined || currentUser.name === '') {
      return <Landing />
    } else if (currentUser) {
      return <Dashboard />
    }
  }

  let viewComponent = setViewComponent()

  return (
      <AppContainer>
        <Header />
        {viewComponent}
      </AppContainer>
    )
}