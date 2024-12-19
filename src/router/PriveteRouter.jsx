import { useContext } from "react";
import AuthContext from "../contex/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading) {
        return  <>Loading...</>
    }
if(user){
    return  children
}


    return (
         <Navigate to="/signin" state={location.pathname}>

         </Navigate>

    );
};

export default PriveteRouter;