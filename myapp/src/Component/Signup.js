import React from 'react'
import {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [text, setText] = useState('');

    async function submit (e){
        e.preventDefault();

        try {
            
            await axios.post("http://localhost:8000/signup",{
                email,password
            })


            
        } catch (error) {
            console.log(e);
            
        }

    }


  return (
    <div>
        <form action ="POST">
            <h1>signup</h1>
            <input type =  "email" onChange ={(e)=>{setEmail(e.target.value)}} placeholder =" Email" />
            <br />
            <br />

            <input  type = "password" onChange ={(e)=>{setPassword(e.target.value)}} placeholder ="Password"/>
            <br />
            <br />

            <input type = "text" onChange = {(e) =>{setText(e.target.value)}} placholder  = "Gender" />
            <br />
            <br />
            <input type = "submit" onClick = {submit} />

        </form>

        <br/>
        <p>OR</p>
        <br/>
        <Link to ="/login"> Login Page</Link>

    </div>
  )
}

export default Signup