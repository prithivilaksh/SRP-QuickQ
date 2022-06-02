import { useRouter } from 'next/router'
import React, { useState,useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const router = useRouter()
  const { user, login ,loading} = useAuth()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (user) {
      router.push('/dashboard')
    }
  }, [user,router])

  const handleLogin = async (e) => {
    e.preventDefault()

    // console.log(user)
    try {
      await login(data.email, data.password)
      router.push('/dashboard')
    } catch (err) {
      console.log(err)
    }
  }
  console.log(user)
  return (
    
    <>
    <style jsx>{
 `.container {
  padding: 0 2rem;
}
.bttt{
    margin-top:50px;
    color:#eaeaea;

}
.main {
  min-height: 90vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.wrapper{
  overflow: hidden;
  max-width: 390px;
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  //margin-bottom: 140px;
}
.wrapper .title-text{
  display: flex;
  width: 200%;
  place-items: center;
}
.wrapper .title{
  width: 50%;
  font-size: 35px;
  font-weight: 600;
  text-align: center;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}


.footer {
  display: flex;
  flex: 1;
  padding: 2rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  align-items: center;
}

.footer a {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.title a {
  color: #0070f3;
  text-decoration: none;
}

.title a:hover,
.title a:focus,
.title a:active {
  text-decoration: underline;
}

.title {
  margin: 0;
  line-height: 1.15;
  font-size: 4rem;
}

.title,
.description {
  text-align: center;
}

.description {
  margin: 4rem 0;
  line-height: 1.5;
  font-size: 1.5rem;
}

.code {
  background: #fafafa;
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1.1rem;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
    Bitstream Vera Sans Mono, Courier New, monospace;
}

.grid {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
}

.card:hover,
.card:focus,
.card:active {
  color: #0070f3;
  border-color: #0070f3;
}

.card h2 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
}

.card p {
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
}

.logo {
  height: 1em;
  margin-left: 0.5rem;
}

.wrapper .form-container{
  width: 100%;
  overflow: hidden;
}
.form-container .form-inner{
  display: flex;
  width: 200%;
}
.form-container .form-inner form{
  width: 50%;
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
.form-inner form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.form-inner form .field input{
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 25px;
  border-radius: 25px;
  border: 1px solid lightgrey;
  border-bottom-width: 2px;
  font-size: 17px;
  transition: all 0.3s ease;
}
.form-inner form .field input:focus{
  border-color: #000000;
  // box-shadow: inset 0 0 3px #fb6aae; 
}
.form-inner form .field input::placeholder{
  color: #999;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder{
  color: #000000;
}

form .btn{
  height: 50px;
  width: 100%;
  border-radius: 25px;
  position: relative;
  overflow: hidden;
  width:100px;

}
form .btn .btn-layer{
  height: 100%;
  width: 300%;
  position: absolute;
  //left: -100%;
  //background: -webkit-linear-gradient(right,#003366,#004080,#0059b3, #0073e6);
background: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(255, 255, 255, 1));
  border-radius: 15px;
  transition: all 0.4s ease;;
  
}
.btxx [type=input]{
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 20px;
  width: 100px;
  right: 100px;
}
form .btn:hover .btn-layer{
  left: 0;
}

@media (max-width: 600px) {
  .grid {
    width: 100%;
    flex-direction: column;
  }
}

.mybtn {
  color:white;
}

`   
}</style>
    {user?<></>:
 
 //<div className="container">
 <main className="main">
 <div className="wrapper">
 <div className="title-text"><h1>Login</h1></div>
 
 <div className="form-container">
   <div className="form-inner"> 
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              value={data.email}
              required
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              value={data.password}
              required
              type="password"
              placeholder="Password"
            />
          </Form.Group>
            {/* <Button variant="primary" type="submit">
            Login
          </Button> */}


        <div className=' text-center'>
          <input type="submit" className="btn btn-primary" value="Login"/>
        </div>

        </Form></div>
      </div></div>
      </main>//</div>
    }
    </>
    
  )
}

export default Login