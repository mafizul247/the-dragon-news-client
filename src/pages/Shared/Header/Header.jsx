import React from 'react';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import logo from './../../../assets/logo.png'
import logoUser from './../../../assets/user.png'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mb-3'>
            <div className='text-center my-2 text-dark'>
                <img src={logo} alt="The Dragon News" />
                <p className='m-0'><small>Journalism Without Fear or Favour</small></p>
                <p className='m-0'>{moment(new Date()).format("dddd, MMMM Do, YYYY")}</p>
            </div>
            <div className="container d-flex  p-2 bg-light rounded text-danger mb-2">
                <button className='btn btn-danger'>Latest</button>
                <Marquee speed={50} pauseOnHover>
                    I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

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
                            <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={logoUser} alt="Logo" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;