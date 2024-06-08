import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import logoUser from './../../../assets/user.png'
import toast from 'react-hot-toast';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut().then(() => toast.success('Logout Successfully')).then(error => console.log(error))
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" >
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link active">Home </NavLink>
                            {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className="nav-link active">About </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/career' className="nav-link active">Career </NavLink>
                        </li>
                    </ul>
                    <form className="d-flex gap-2" role="search">
                        {
                            user ? <>
                                <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logoUser} alt="Logo" />
                                <Link onClick={handleLogout} className="btn btn-outline-success" type="submit">LogOut</Link>
                            </> : <>
                                <Link to='/login' className="btn btn-outline-success" type="submit">Login</Link>
                            </>
                        }
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;