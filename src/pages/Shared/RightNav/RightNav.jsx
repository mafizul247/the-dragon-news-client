import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import image from './../../../assets/bg1.png'

const RightNav = () => {
    return (
        <div>
            <div className='mb-3'>
                <h4>Login With</h4>
                <button className="btn btn-outline-primary mb-2 w-100"><FaGoogle /> Login With Google</button>
                <button className="btn btn-outline-primary mb-2 w-100"><FaGithub />  Login With GitHub</button>
            </div>
            <div className="mb-3">
                <h4>Find Us On</h4>
                <ul class="list-group">
                    <li class="list-group-item"><FaFacebook /> Facebook</li>
                    <li class="list-group-item"><FaTwitter /> Twitter</li>
                    <li class="list-group-item"><FaInstagram /> Instragram</li>
                </ul>
            </div>
            <QZone />
            <div>
                <img src={image} alt="Image" />
            </div>
        </div>
    );
};

export default RightNav;