import { Outlet } from "react-router-dom";
import Header from './component/header';

function MainLayout(){
    return(
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainLayout;