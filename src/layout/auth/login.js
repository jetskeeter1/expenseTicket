import '../css/landpage.css';
import '../css/dashboard.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './authtoken';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password); // authorize user to check and grab data from database
            const user = userCredential.user; // gets user related information

            const idToken = await user.getIdToken();// takes a JWT Token from firebase
            console.log("token got: ", idToken); // shows a jwt token

            const res = await axios.post(
                'http://localhost/expense_app/expense_backend/firebasetoken.php',
                {},
                {
                    headers: {
                        Authorization: `Bearer ${idToken}`, //Authenticate and authorize user to backend and check with php database
                        'Content-Type': 'application/json',
                    },
                }
            );

            // console.log("Login success:", res.data);
            if(res.data.message === "User verified"){
                localStorage.setItem("token", idToken); // store token. it can be used to identify and get data related to user
                navigate("/dashboard");
                // alert("User: " + res.data.user.username);
            } else {
                console.log("Login Failed, Account do not exist!");
            }
        } catch (error) {
            console.error("Login failed:", error.message);
        }
    };

    return (
        <div className='flex flex-justify-center flex-align-center flex-d-col login-container'>
            <div className='login-wrapper flex flex-d-col'>
                <a href='/' className='back-button'>Back</a>
                <form onSubmit={handleSubmit} className='input-container flex flex-d-col'>
                    <label>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit' className='button login-button'>Login</button>
                </form>
                <div className='borderline'></div>
                <div className='bottomLayer'>
                    <span>Don't have an account? <a href='/register'>Register</a> here.</span>
                </div>
            </div>
        </div>
    );
}

export default Login;
