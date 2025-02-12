import React, { useState } from 'react'

function Loginpage() {

    const [data, setData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const changerHandler = e => {
        setData({ ...data, [e.target.name]: [e.target.value] })
    }

    const submitHandler = (e) => {
        e.preventDefault();

       console.log(data)
       
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text"
                    placeholder='Enter Your UserName'
                    value={data.username}
                    name='username'
                    onChange={changerHandler} /><br/>
                <input type="password"
                    placeholder='Enter Your password'
                    value={data.password}
                    name='password'
                    onChange={changerHandler} /><br/>
                <input type="password"
                    placeholder='Enter Your confirmPassword'
                    value={data.confirmPassword}
                    name='confirmPassword'
                    onChange={changerHandler} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Loginpage