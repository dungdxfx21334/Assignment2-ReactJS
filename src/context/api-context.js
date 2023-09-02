// The API_KEY is used multiple times by multiples separated files. Changing it in the future
// can be a problem. Although in this case it might be a little bit of overkill to use context
// just to store a constant, but it's a good practice so it is worth it.

import { createContext } from 'react'

const defaultValue = {
  API_KEY: '7cfd9d81abbc2ae25775d517ea6c0dd5'
}

export const ApiKeyContext = createContext(defaultValue)
