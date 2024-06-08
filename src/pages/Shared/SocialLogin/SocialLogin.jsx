import React, { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import toast from 'react-hot-toast';

const SocialLogin = () => {
    const { googleLogin, gitHubLogin } = useContext(AuthContext);

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                toast(`${logedUser.email} login successfully`)
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                toast(`${logedUser.email} login successfully`)
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div>
            <div className='mb-3'>
                <h4>Login With</h4>
                <button onClick={handleGoogleLogin} className="btn btn-outline-primary mb-2 w-100"><FaGoogle /> Login With Google</button>
                <button onClick={handleGitHubLogin} className="btn btn-outline-primary mb-2 w-100"><FaGithub />  Login With GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;