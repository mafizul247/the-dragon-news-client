import React, { useContext, useState } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle('Sign Up');

    const handgleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, photo, password);
        if (password.length < 6) {
            return toast.error('Password must be more then 6 charecters');
        }
        createUser(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                navigate(from, { replace: true });
                toast.success(`${logedUser} Registration Successfully`);
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    const handleAccepted = (event) => {
        const checked = event.target.checked
        setAccepted(!accepted);
    }

    return (
        <div className='container'>
            <NavBar />
            <div style={{ width: '500px' }} className='mt-4 bg-light p-4 rounded mx-auto'>
                <h4>Please Sign Up</h4>
                <form onSubmit={handgleRegister}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' placeholder='Entry your name' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Photo URL</label>
                        <input type="url" className="form-control" name='photo' placeholder='Entry your photo url' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' placeholder='Entry your email' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' placeholder='Entry your password' />
                    </div>
                    <div className="mb-3 form-check">
                        <input onClick={handleAccepted} type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Accept Trems & Conditions </label>
                    </div>
                    <input type="submit" className="btn btn-primary w-100" value="Sign Up" disabled={accepted} />
                </form>
                <div>
                    <p className='mt-2 text-center'>Alreay have an account? <Link to='/login' className='text-decoration-none' >Please Login!</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;