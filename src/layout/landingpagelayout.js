import { Outlet } from "react-router-dom";
import Header from './auth/landheader';

function MainLayout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout;