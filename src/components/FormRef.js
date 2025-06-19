import React, {useRef, useState} from 'react'
import Card from './Card'

const FormRef = () => {
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmationRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Full Name: ', fullNameRef.current.value);
    console.log('Email: ', emailRef.current.value);
    console.log('Password: ', passwordRef.current.value);
    console.log('Password Confirmation ', passwordConfirmationRef.current.value);

    fullNameRef.current.value = '';
    emailRef.current.value = '';
    passwordRef.current.value = '';
    passwordConfirmationRef.current.value = '';
  }

  return (
      <Card>
        <h1>Form Ref</h1>
        <form id="info-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="full_name">Full Name </label>
            <input type="text" id="full_name" ref={fullNameRef}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordRef}/>
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" id="password_confirmation" ref={passwordConfirmationRef}/>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </Card>
  )
}

export default FormRef