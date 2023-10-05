import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import useAuth from "../../hooks/useAuth";




const Login = () => {
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();

    const { signInUser } = useAuth();
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password');

        // Sign In user
        signInUser(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col w-full">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body ">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center">Do not have an account? <Link className="font-bold text-blue-500" to='/register'>Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;