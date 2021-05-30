import React from 'react'

import { auth } from '../firebaseConfig'
const AuthContext = React.createContext()

export function useAuth() {
    return useContex(AuthContext)

}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const value = {
        currentUser
    }

    function login(email, password) {


    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}


