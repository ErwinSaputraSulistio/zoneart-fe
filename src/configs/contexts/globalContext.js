import React, { useState } from 'react'

export const GlobalContext = React.createContext()

export const GlobalContextProvider = ({ children }) => {
  const [noteList, setNoteList] = useState([])

  return(
    <GlobalContext.Provider
      value={{
        noteList,
        setNoteList
      }}
    >
      { children }
    </GlobalContext.Provider>
  )
}