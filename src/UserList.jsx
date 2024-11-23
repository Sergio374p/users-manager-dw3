import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useUserContext} from './context/UserContext'

const UserList = () => {


    const {users} = useUserContext()
  return (
    <table class='table table-hover container bg-dark'>
      <thead>
        <tr>
          <th scope='col'>Users</th>
        </tr>
      </thead>
      <tbody>
          {users.map(user => (
            <tr key={user.id} class='table-dark'>  
            <Link to={`/users/${user.id}`}>
              <td>{user.name}</td>
              </Link>
              <td>{user.email}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

export default UserList