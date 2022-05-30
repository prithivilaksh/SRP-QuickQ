import React, { useState,useEffect } from 'react'
import { doc, setDoc,addDoc ,getFirestore, collection } from "firebase/firestore";
import { db } from "../firebase/initFirebase" 
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'
import { useRouter } from 'next/router'

const Signup = () => {
  const { user, signup ,loading} = useAuth()
  const router=useRouter()
  console.log(user)
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const createuser =async (email)=>{

    const dataobj={
      email
    };
    await addDoc(collection(db, "users"),dataobj);
    
    console.log("added into users collection -pl")

  }

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user,router])
  const handleSignup = async (e) => {
    e.preventDefault()

    try {
      await signup(data.email, data.password).then(()=> {createuser(data.email)})
      
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }

    console.log(data)
  }
  console.log(user)
  return (
    <>
    {user?<></>:
    
   
    
    
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
    }
    </>
    
  )
}

export default Signup