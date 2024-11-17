import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from 'Components/Config/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { message } from 'antd'


const AuthContext = createContext()
const isLogin = localStorage.getItem('user-login')
const initialState = { isAuth: isLogin || false, user: {} }
const AuthProvider = ({ children }) => {
    const [state, dispatch] = useState(initialState)
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
           if (user) {
            dispatch(s=>({...s , isAuth:true , user}))
            // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
              // ...
              console.log('user', user)
            } else {
              // User is signed out
              // ...
                console.log('User is log out')
            }
          });
    },[])

    const handleLogout = () =>{
      dispatch(initialState)  
      signOut(auth)
        .then(()=>{
            message.success("Logout successfull")
            localStorage.removeItem('user-login')
            localStorage.removeItem('user-uid')
        })
        .catch(error =>{
            message.error("Something went wrong while loging out the user")
        })

    }
    return (
        <AuthContext.Provider value={{ ...state,  dispatch , handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext)

export default AuthProvider