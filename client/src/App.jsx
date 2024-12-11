import React from 'react'
import Signup from './Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import { UserContext } from './context/contextapi'
import { useState } from 'react'


function App() {
  const [user, setUser] = useState(null); // Holds user data

  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>

      </UserContext.Provider>




    </div>
  )
}

export default App