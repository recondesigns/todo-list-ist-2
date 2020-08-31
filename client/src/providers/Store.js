import React, { useState } from 'react'

export const AppStateContext = React.createContext()
export const CurrentUserContext = React.createContext()

export default function Store({ children }) {
    const [appState, setAppState] = useState()
    const [currentUser, setCurrentUser] = useState({name: '', tasks:[], id: ''})

    return (
        <AppStateContext.Provider value={[appState, setAppState]}>
            <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
                { children }
            </CurrentUserContext.Provider>
        </AppStateContext.Provider>
    )
}