
import { useState } from 'react'
export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
  function logOut () {
     localStorage.removeItem('token')
     window.location.reload()
   }
}

return (
  <div >
    <div>{user.name}</div>
    <div >{user.email}</div>
    <button onSubmit={handleLogOut}>LOG OUT</button>
  </div>
);
}