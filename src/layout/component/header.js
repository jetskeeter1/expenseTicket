import '../css/header.css';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();

    const logout = ()=>{
        localStorage.removeItem("token");
        navigate("/");
    }

    return(
        <div className='header width-f'>
            <button onClick={logout} className='button'>Logout</button>
            Expense Tracker
        </div>
    )
}

export default Header;