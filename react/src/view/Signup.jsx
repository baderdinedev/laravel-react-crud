import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../context/ContextProvider'

export default function Signup() {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfiramtionRef = useRef()
    const {setUser, setToken} = useStateContext()
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confiramtion: passwordConfiramtionRef.current.value,
        }
        axiosClient.post('/signup',payload).then(({data}) => {
             setUser(data.user)
             setToken(data.token)
        }).catch(err => {
            const response = err.response
            if(response && response.status === 422){
                console.log(response.data.errors)
            }
        })
    }
  return (
          <form onSubmit={onSubmit}>
                <h1 className='title'>SignUp for free</h1>
                <input ref={nameRef} type='text' placeholder='Full Name'/>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <input ref={passwordConfiramtionRef} type='password' placeholder='Password Confirmation'/>
                <button className='btn btn-block'>Sign Up!</button>
                <p className='message'>
                    Already Registered? <Link to="/login">Sign in Now!</Link>
                </p>
          </form>
  )
}
