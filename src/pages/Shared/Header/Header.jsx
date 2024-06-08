import React, { useContext } from 'react';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import logo from './../../../assets/logo.png'
import NavBar from '../NavBar/NavBar';

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
            <NavBar />
        </div>
    );
};

export default Header;