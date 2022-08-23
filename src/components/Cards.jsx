import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'


const Cards = ({ user, uploadDone }) => {
  const [edit, setEdit] = useState('')
  const [editInput, setEditInput] = useState('show')
  const { register, handleSubmit } = useForm()

  const editUser = () => {
    if (edit === '') {
      setEdit('edit')
      setEditInput('edit__input')
    } else {
      setEdit('')
      setEditInput('show')
    }
  }
  const deleteUserApi = () => {
    const id = user.id
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.delete(URL)
      .then(res => {
        console.log(res.data)
        uploadDone()
      })
      .catch(err => console.log(err))
  }
  const changeUsersData = data => {
    const id = user.id
    const URL = `https://users-crud1.herokuapp.com/users/${id}/`
    axios.patch(URL, data)
      .then(res=>{
        console.log(res.data)
        uploadDone()
      })
      .catch(err=>console.log(err))
  }
  return (
    <div>

      <form className='card' onSubmit={handleSubmit(changeUsersData)}>
        <h2 className={`${edit} ${'card__tittle'}`}>{user.first_name} {user.last_name}</h2>
        <h2>
          <label htmlFor="first_name"></label>
          <input {...register('first_name')} id='first_name' type="text" placeholder={user.first_name} className={editInput} />
        </h2>
        <h2>
          <label htmlFor="last_name"></label>
          <input {...register('last_name')} id='last_name' type="text" placeholder={user.last_name} className={editInput} />
        </h2>
        <label htmlFor='email' className={`${edit} ${'card__item'}`}>Email</label>
        <span className={`${edit} ${'card__span'}`}>{user.email}</span>
        <input {...register('email')} id='email' type="email" placeholder={user.email} className={editInput} />
        <label htmlFor='birthday' className={`${edit} ${'card__item'}`}>Date</label>
        <span className={`${edit} ${'card__span'}`}><i className='bx bxs-calendar'></i>{user.birthday}</span>
        <input {...register('birthday')} id='birthday' type="date" className={editInput} />
        <button className={`${editInput} ${'cbtn__update'}`} onClick={editUser} >Save changes</button>
      </form>
      <footer className='card__footer'>
        <button className='card__btn delete' onClick={deleteUserApi}><i className='bx bx-trash'></i></button>
        <button className='card__btn update' onClick={editUser}><i className='bx bx-edit-alt'></i></button>
      </footer>

    </div>
  )
}

export default Cards