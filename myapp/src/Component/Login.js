import React from 'react'
import {useState} from 'react'
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Signup from './Signup'


function Login() {
    const [email,setEmail] = useState('')
    const [password , setPassword] = useState('')

    async function submit (e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })

        }
        catch{
            console.log(e);

        }
    }


    return (
        <div>
            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit"  onClick={submit}/>


            </form>
            <br />

            <p>OR</p>

            <br />
            <Link to="/signup"> Signup Page</Link>

        </div>
    )
}

export default Login