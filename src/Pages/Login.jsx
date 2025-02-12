import React, { useState } from 'react'

function Login() {
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(username)
        console.log(password)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter Username' />
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='Enter password' />
            <input type="submit"  />
        </form>
    </div>
  )
}

export default Login