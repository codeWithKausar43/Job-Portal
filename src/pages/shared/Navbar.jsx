import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../contex/AuthContext";
import logo  from "../../assets/logo.png"
const Navbar = () => {
const {user,signOutUser} = useContext(AuthContext)

const handleSingOut = () => {
  signOutUser()

}
  const links = (
    <>
     <div className="flex gap-2">
     <NavLink to="/">Home</NavLink>
       <NavLink to="/myApplyJob">My Application</NavLink>
       <NavLink to="/addJob">Add Job</NavLink>
       <NavLink to="/myPostedJobs">MY Posted Jobs</NavLink>
     </div>

    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
        <img className="w-12" src={logo} alt="" />
        <h3>Job portal</h3>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <p className="mr-2 text-purple-500">{user?.email}</p>

   {
    user ? <>
    <button  onClick={handleSingOut}  className="btn" >LogOut</button></> : <>
         <Link to="/register">Register</Link>
        <Link to="signin">
        <button className="btn" >Sign In</button></Link>  </>
   }
        
      </div>
    </div>
  );
};

export default Navbar;
