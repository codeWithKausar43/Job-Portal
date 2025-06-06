import Lottie from "lottie-react";
import registerLottieData  from "../../assets/register.json"
import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";
import SocialLogin from "../shared/socialLogin";
 
 

const Register = () => {
  const {createUser} = useContext(AuthContext)
const handleFormRegister = e => {
    e.preventDefault()
    const form = e.target 
    const email  = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    //validation korte hobe
    createUser(email, password)
    .then(result => {
      console.log(result.user)
    })
    .catch(error => {
      console.log(error.message)
    })
}
    
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
        <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form  onSubmit={handleFormRegister} className="card-body">
          <h1 className="text-3xl text-center font-bold">Register now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input name="email" type="email"  placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default Register;