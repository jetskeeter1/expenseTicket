import '../css/landpage.css';
import '../css/dashboard.css';

function Login(){
    return(
        <>
            <div className='flex flex-justify-center flex-align-center flex-d-col login-container'>
                <div className='login-wrapper flex flex-d-col'>
                    <a href='/' className='back-button'>Back</a>
                    <form className='input-container flex flex-d-col'>
                        <label name="username">username</label>
                        <input type='text' placeholder='Username' className='username'></input><br />
                        <label name="password">password</label>
                        <input type='password' placeholder='Password' className='password'></input><br />
                        <button type='submit' className='button login-button'> Login</button>
                    </form>
                    <div className='borderline'></div>
                    <div className='bottomLayer'>
                        <span>Don't have an account, yet? </span> <a href='/register'>Register</a> <span>here.</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
