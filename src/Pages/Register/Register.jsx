import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Navbar from "../Shared/Navbar/Navbar";
import { useState } from "react";

const Register = () => {
    const { createUser } = useAuth();
    const [error, setError] = useState('');

    const handleRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email')
        const password = form.get('password')

        if (password.length < 6) {
            return alert('password should be at least 6 characters')
        }
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
          e.target.reset();  
    }


    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-blue-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center ">
                        <h1 className="text-3xl text-red-900 font-bold">Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-200">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phot Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Phot url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        {
                            error && <p>{error}</p>
                        }
                        <p className="text-center mb-4">Already have an accoutn? <Link className="text-blue-500 font-bold" to="/login">Login please</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;