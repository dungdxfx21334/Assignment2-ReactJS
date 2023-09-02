import React from 'react'
import { ApiKeyContext } from './api-context'

const ApiContextProvider = props => {
  return (
    <ApiKeyContext.Provider
      value={{ API_KEY: '7cfd9d81abbc2ae25775d517ea6c0dd5' }}
    >
      {props.children}
    </ApiKeyContext.Provider>
  )
}

export default ApiContextProvider
