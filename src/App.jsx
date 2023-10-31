import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const [closeForm, setCloseForm] = useState(true)

  const baseUrl = 'https://users-crud-dev-tsbf.3.us-1.fl0.io'

  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl, setCloseForm)

  useEffect(() => {
    getUsers('/users')
  }, [])

  console.log(users)

  const handleOpenForm = () => {
    setCloseForm(false)
  }

  return (
    <div>
      <h1 className='maintittle'>Users</h1>
      <button onClick={handleOpenForm} className='create__btn'>+ Create New User</button>
      <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      <div className='container'>
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setCloseForm={setCloseForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
