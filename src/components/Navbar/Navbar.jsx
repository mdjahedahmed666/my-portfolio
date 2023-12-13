import { Link, NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const Navbar = () => {

    const navLinks = (
        <>
        <li className="text-lg">
            <NavLink to="/">Home</NavLink>
        </li>
        <li className="text-lg">
            <NavLink to="/project">Projects</NavLink>
        </li>
        <li className="text-lg">
            <NavLink to="/contact">Contact</NavLink>
        </li>
        </>
    )
  return (
    <div className="navbar bg-zinc-200 shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to="/" className="btn btn-ghost text-3xl font-bold">JAHED</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center">
    <MdEmail className="text-4xl text-red-500"/>
      <div>
        <h4 className="font-medium text-lg">Email Me</h4>
        <p className="font-bold">mdjahedahmed12@gmail.com</p>
      </div>
    </div>
  </div>
</div>
  )
}

export default Navbar;