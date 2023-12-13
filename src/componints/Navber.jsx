import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providerss/AuthProvider";


const Navber = () => {

  const {user, logOut} = useContext(AuthContext);


  const handelLogOut = () => {
    logOut()
    .then(() => console.log('User logoutsuccesfull'))
    .catch(error => console.error(error))
  }

    const navlink = <>
    <li className="mr-2"><NavLink to="/">Home</NavLink></li>
    <li className="mr-2"><NavLink to="/login">Login</NavLink></li>
    <li className="mr-2"><NavLink to="/register">Register</NavLink></li>
    <li className="mr-2"><NavLink to="/orders">Orders</NavLink></li>
    {
      user && <> 
          <li className="mr-2"><NavLink to="/profile">Profile</NavLink></li>
          <li className="mr-2"><NavLink to="/dashbord">Dashbord</NavLink></li>{/* option jodi user thake tahole dekhabe  */}
      </>
    }
    </>

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl">{user ? <h1>{user.displayName}</h1> : <h1 className="font-bold">invalid</h1>}</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? <>
      <span>{user.email}</span>
      <a onClick={handelLogOut} className="btn ml-2">Sing out</a>
      </> 
      :
      <Link to='/login'>
        <button className="btn">Login</button>
      </Link>
    }
    
  </div>
</div>
    );
};

export default Navber;