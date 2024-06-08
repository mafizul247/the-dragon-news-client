import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import image from './../../../assets/bg1.png'
import SocialLogin from '../SocialLogin/SocialLogin';

const RightNav = () => {
    return (
        <div>
            <SocialLogin />
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