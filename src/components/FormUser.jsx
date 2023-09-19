import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './styles/FormUser.css'

const FormUser = ({ createUser, infoUpdate, updateUser, setInfoUpdate, closeForm, setCloseForm }) => {

    const { handleSubmit, register, reset } = useForm()

    useEffect(() => {
        reset(infoUpdate)
    }, [infoUpdate])

    const submit = (data) => {
        if(infoUpdate){
            updateUser('/users', infoUpdate.id, data)
            setInfoUpdate()
        } else {
            createUser('/users', data)
        }
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: ''
        })
    }

    const handleCloseForm = () => {
        setCloseForm(true)
    }
 
  return (
    <div onClick={handleCloseForm} className={`formuser-container ${closeForm && 'close-form'}`}>
        <form onClick={e => e.stopPropagation()} className='formuser' onSubmit={handleSubmit(submit)}>
            <h2 className='formuser__title'>{infoUpdate ? 'Update User' : 'New User'}</h2>
            <div onClick={handleCloseForm} className='formuser__close'>x</div>
            <div className='formuser__group'>
                <label className='formuser__label' htmlFor="email">Email</label>
                <input className='formuser__input' {...register('email')} type="email" id='email' />
            </div>
            <div className='formuser__group'>
                <label className='formuser__label' htmlFor="password">Password</label>
                <input className='formuser__input' {...register('password')} type="password" id='password' />
            </div>
            <div className='formuser__group'> 
                <label className='formuser__label' htmlFor="first_name">First name</label>
                <input className='formuser__input' {...register('first_name')} type="text" id='first_name' />
            </div>
            <div className='formuser__group'>
                <label className='formuser__label' htmlFor="last_name">Last name</label>
                <input className='formuser__input' {...register('last_name')} type="text" id='last_name' />
            </div>
            <div className='formuser__group'>
                <label className='formuser__label' htmlFor="birthday">Birthday</label>
                <input className='formuser__input' {...register('birthday')} type="date" id='birthday' />
            </div>
            <button className='formuser__btn'>{ infoUpdate ? 'Edit User' : 'Create User'}</button>
        </form>
    </div>
  )
}

export default FormUser