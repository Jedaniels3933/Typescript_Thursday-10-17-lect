import React, { useState } from 'react'

// custom user interface
// name (string) email (string)

interface User {
    name: string
    email: string
}

const UserComponent = () => {
  // setting our user to type null by default
  // so we have to declare that typing in our <>
  // <User | null> says that our type can either be a User object or a null value
  // good practice when creating objects in state
  const [user, setUser] = useState<User | null>(null)

  const handleLogin = () => {
    // let test = "string";
    // test = 5;

    const newUser: User = {
        name: "User12345",
        email: "user@codingtemple.com"
    }

    // update our user state
    setUser(newUser)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <>
        <h1>User Login</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
        //Optional chaining
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
    </>
  )
}

export default UserComponent