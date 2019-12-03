import React, { createContext } from 'react'

const UserContext = createContext({
    userLoggedIn: false,
    userProjects: [],
    //id: '',
    userNane: '',
    email: ''
})

export default UserContext