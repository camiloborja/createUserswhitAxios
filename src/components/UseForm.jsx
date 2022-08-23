import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

const UseForm = ({ uploadDone, createNewUser }) => {
  const { register, handleSubmit } = useForm()
  const UploadnweUser = data => {
    const URL = 'https://users-crud1.herokuapp.com/users/'
    console.log(data)
    axios.post(URL, data)
      .then(res => {
        console.log(res.data)
        uploadDone()
        createNewUser()
      })
      .catch(err => console.log(err))
  }
  const exitUpload = () => {
    createNewUser()
  }

  return (
    <div className="new__user__box">
      <div className="new__user_tittle">
        <h1>New User</h1>
        <button className='btn__cancel' onClick={exitUpload}><i className='bx bx-x-circle'></i></button>
      </div>
      <form className="new__user__form" onSubmit={handleSubmit(UploadnweUser)}>
        <div className="new__user__name">
          <i className='bx bx-male'></i>
          <label htmlFor='name' className='new__user__span'>
            <input {...register('first_name')} className='new__user__input' type="text" placeholder='First Name' id='first_name' />
            <input {...register('last_name')} className='new__user__input' type="text" placeholder='Last Name' id='Last Name' /></label>
        </div>
        <label htmlFor='email' className='new__user__span'><i className='bx bxs-calendar'></i>
          <input {...register('email')} className='new__user__input' type="email" placeholder='Example@example.com' id='email' /></label>
        <label htmlFor='password' className='new__user__span'><i className='bx bxs-key'></i>
          <input {...register('password')} className='new__user__input' type="password" placeholder='Password' id='password' /></label>
        <label htmlFor='birthday' className='new__user__span'><i className='bx bxs-calendar' ></i>
          <input {...register('birthday')} className='new__user__input' type="date" placeholder='YYYY-MM-DD' id='birthday' /></label>
        <button className='btn__upload'>Upload</button>
      </form>

    </div>
  )
}

export default UseForm