import{Navigate} from 'react-router-dom';

function ProtectRouting({children}){
    const token = localStorage.getItem("token"); // check token saved in localstorage

    if(!token){
       return (<Navigate to="/" replace />); // replace the url string if tried to access dashboard. replace will keep users from accesing dashoard and change to /
    }
    
    return children;
}

export default ProtectRouting;