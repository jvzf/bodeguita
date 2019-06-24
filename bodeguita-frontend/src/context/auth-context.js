import React from 'react'

export default React.createContext({
    token: null,
    login: (token) => {},
    logout: () => {}
})