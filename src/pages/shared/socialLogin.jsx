import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";

 

const SocialLogin = () => { 
    const { googleLogin } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error("Google Login Error:", error.message);
            });
    };

    return (
        <div className="m-4 text-center ">
            <button className="btn" onClick={handleGoogleSignIn}>Google Login</button>
        </div>
    );
};

export default SocialLogin;
