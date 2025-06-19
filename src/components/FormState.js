import React, {useState} from 'react'
import Card from './Card'


const FormState = () => {
  const [formData, setFormData]  = useState({
    full_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const handleChange = (event) => {
    const {id, value} = event.target;
    setFormData(prev => ({
      ...prev, [id]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    });
  }

  return (
      <Card>
        <h1>Form State</h1>
        <form id="info-form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="full_name">Full Name </label>
            <input type="text" id="full_name" value={formData.full_name} onChange={(e) => handleChange(e)}/>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={(e) => handleChange(e)}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formData.password} onChange={(e) => handleChange(e)}/>
          </div>
          <div>
            <label htmlFor="password_confirmation">Confirm Password</label>
            <input type="password" id="password_confirmation" value={formData.password_confirmation} onChange={(e) => handleChange(e)}/>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </Card>
  )
}

export default FormState