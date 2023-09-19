import React from 'react'

const UserCard = ({ user, deleteUser, setInfoUpdate, setCloseForm }) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setInfoUpdate(user)
        setCloseForm(false)
        
    }
 
  return (
    <article className='card'>
        <h3 className='card__name'>{`${user.first_name} ${user.last_name}`}</h3>
        <hr />
        <ul className='card__elements'>
            <li className='card__item'><span className='card__label'>Email: </span><span className='card__info'>{user.email}</span></li>
            <li className='card__item'><span className='card__label'>Birthday: </span><span className='card__info'>{user.birthday}</span></li>
        </ul>
        <hr />
        <div className='card__btn__container'>
            <button className='card__btn' onClick={handleDelete}>Delete</button>
            <button className='card__btn' onClick={handleEdit}>Edit</button>
        </div>
    </article>
  )
}

export default UserCard