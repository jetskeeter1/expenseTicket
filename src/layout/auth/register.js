import '../css/landpage.css';
import '../css/dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Register(){
    const [username, setUserName] = useState("");
    const [email, setEMail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const userData = {
            username,
            email,
            password

        }

        try{
            axios.post("http://localhost/expense_app/expense_backend/fbUserCreate.php", userData)
            .then(response=>{
                console.log("Success send: ", response.data);
            }).catch(error=>{
                console.error("Unsuccess register: ", error.data);
            })
        } catch{

        }
    }
    
    return(
        <>
            <div className='container'>
                <a href='/'>Back</a>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} value={username}/>
                    <input type='email' placeholder='Email' onChange={(e)=>setEMail(e.target.value)} value={email}/>
                    <input type='text' placeholder='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register;