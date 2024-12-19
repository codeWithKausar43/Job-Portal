import Lottie from "lottie-react";
import lottieLoginData from "../../assets/login.json"
import { useContext } from "react";
import AuthContext from "../../contex/AuthContext";
import SocialLogin from "../shared/socialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
 
const SignIn = () => {
const {signInUser} = useContext(AuthContext)
const navigate= useNavigate()
const location = useLocation()
console.log("singIN Location", location)
const from = location.state || '/'
 const handleFormSignIn = (e) =>{
    e.preventDefault()
    const form = e.target 
    const email = form.email.value;
    const password = form.password.value;
signInUser(email, password)
.then(result => {
    console.log(result.user.email)
    const user = { email : email}
    axios.post("http://localhost:5000/jwt", user)
  .then(data => {
    console.log(data)
  })
    navigate(from)
})
.catch(error => {
    console.log(error.message)
})


 }


    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
            <Lottie animationData={lottieLoginData}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form  onSubmit={handleFormSignIn} className="card-body">
          <h1 className="text-3xl text-center font-bold">Login now!</h1>
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
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    );
};

export default SignIn;