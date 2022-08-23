import { useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards'
import axios from 'axios'
import UseForm from './components/UseForm'

function App() {
  const [users, setUsers] = useState()
  const [createUser, setCreateUser] = useState(true)


  const URL = 'https://users-crud1.herokuapp.com/users/'
  const uploadDone = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    uploadDone()
  }, [])

  const createNewUser = () => {
    if (createUser) {
      setCreateUser(false)
    } else {
      setCreateUser(true)
    }
  }
  console.log(createUser)
  if (createUser) {
    return (
      <div className="App">
        <div className="app__tittle">
          <h1>Users List</h1>
          <button className='btn__upload' onClick={createNewUser}>Create a new user</button>
        </div>
        <div className="card__box">
          {
            users?.map(user => (
              <Cards
                key={user.id}
                user={user}
                uploadDone={uploadDone}
              />
            ))
          }
        </div>
      </div>
    )
  } else {
    return (
      <div className="new__user">
        <UseForm
          uploadDone={uploadDone}
          createNewUser={createNewUser}
        />
      </div>
    )
  }

}

export default App
