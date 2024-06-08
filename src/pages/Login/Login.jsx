import React, { useContext } from 'react';
import NavBar from '../Shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handgleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            return toast.error('Password must be more then 6 charecters');
        }
        loginUser(email, password)
            .then(result => {
                const logedUser = result.user;
                console.log(logedUser);
                navigate(from, { replace: true });
                toast.success(`${logedUser} Login Successfully`);
            }).catch(error => {
                console.log(error);
                toast.error(error.message);
            })
    }

    return (
        <div className='container'>
            <NavBar />
            <div style={{ width: '500px' }} className='mt-4 bg-light p-4 rounded mx-auto'>
                <h4>Please Login!</h4>
                <form onSubmit={handgleLogin}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' placeholder='Entry your email' />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' placeholder='Entry your password' />
                    </div>
                    <input type="submit" className="btn btn-primary w-100" value="Login" />
                </form>
                <div>
                    <p className='mt-2 text-center'>Don't have an account? <Link to='/sign-up' state={location.state} className='text-decoration-none' >Please Sign Up!</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;