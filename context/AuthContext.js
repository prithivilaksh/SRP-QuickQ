import { createContext, useContext, useEffect, useState } from 'react'
import {onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,} from 'firebase/auth'
import { auth } from '../firebase/initFirebase'

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    
    await signOut(auth)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout ,loading}}>
      {loading ? <h1> Loading........</h1>: children}
    </AuthContext.Provider>
  )
}