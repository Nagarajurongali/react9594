import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username)
    console.log(password)
  }

  return (
    <div className='border p-3 m-auto w-50 '>
      <p className='text-center text-primary'>Login FOrm</p>
      <form onSubmit={submitHandler}>
        <label>Enter Your Username</label>
        <input type="text" value={username} className='form-control mb-2' onChange={(e) => { setUsername(e.target.value) }} />
        <label>Enter Your password</label>
        <input type="password" value={password} className='form-control mb-2' onChange={(e) => { setPassword(e.target.value) }} />
        <label>Don't have an account?<Link to='/signup'>signup</Link> </label>
        <Link to='/dashboard'><input type="submit" className='btn btn-primary w-100' /></Link>
      </form>
    </div>
  )
}

export default Login