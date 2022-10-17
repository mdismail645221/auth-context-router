import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const RegisterFrom = () => {

    const { createUser, signInWihGoogle } = useContext(AuthContext)
    // console.log(createUser)

    const handleLoginForm = (event) => {
        event.preventDefault()
        // console.log(event)
        const form = event.target;
        const email = event.target.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset()
                console.log(user)
            })
        .catch(error=> console.error(error))
            
    }

    const handleGoogleSignIn = () =>{
        signInWihGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        .catch(error=> console.log(error))
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                {/* <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleLoginForm} className="card-body">
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
                    </div>
                    <Link to='/login'>if already register Now! <small className='hover:underline text-violet-600 font-semibold'>Please Login</small></Link>

                    <div className="form-control mt-6">
                        <button type='submit' className="btn btn-primary">Register</button>
                    </div>
                </form>
                    <button onClick={handleGoogleSignIn} className="inline-flex w-16 btn btn-warning text-center text-black font-semibold shadow-lg border-spacing-1 border-yellow-600 rounded-full">Google</button>
                </div>
            </div>
        </div>
    );
};

export default RegisterFrom;