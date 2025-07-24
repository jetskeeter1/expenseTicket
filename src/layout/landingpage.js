
import '../layout/css/landpage.css';
import '../layout/css/dashboard.css';

function LandPage(){
    return(
        <>
            <div className="centerItem width-height-f">
                <div className="logregContainer">
                    <h1>Expense Tracker Website</h1>
                    <p>Create by: <span>Jetskeeter</span></p>
                    <div className="langpageButtons">
                        <a href="/login">Login</a>
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandPage;