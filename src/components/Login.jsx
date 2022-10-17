import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom'
import { AuthContext } from '../contexts/UserContext';

const Login = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const { signIn } = useContext(AuthContext);

    const handleRegForm = (event) => {
        event.preventDefault()
        // console.log(event)
        const form = event.target;
        const email = event.target.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setSuccess(true)
            })
        .catch(error => {
            console.error(error);
            console.log(error.message)
            setError(error.message)

        })
        
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <Link to='/register' className="label-text-alt">If not ‍<span className='text-violet-900 font-semibold link link-hover'>registered</span> please go here</Link>
                            </label>
                            {
                                success && <p className='text-green-600'>SuccessFully Added{success}</p>
                            }
                            <p className='text-red-600'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;