import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Register = () => {
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { createUser } = useContext(AuthContext);


    const handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        if (password.length < 6) {
            setRegisterError('Password length should be 6 or above');
            return;
        }
        else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)) {
            setRegisterError('Please use at least one special character');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Please use at least one upper case character');
            return;
        }

        setRegisterError('');
        setSuccess('');


        try {
            const result = await createUser(email, password);

            // Additional fetch request here


            console.log(result.user);
            toast.success('You have registered successfully', {
                position: toast.POSITION.TOP_RIGHT,
            });

            e.target.reset();
            navigate("/");
        } catch (error) {
            console.error(error);
            setRegisterError(error.message);
        }
    };


    return (
        <div className=" mx-auto">

            <h2 className=" text-center text-3xl mt-4 mb-4">Please Register</h2>

            <div className="">
                <form onSubmit={handleSignUp} className="card-body w-3/4 md:w-2/4 lg:w-2/5 mx-auto dark:text-white shadow-xl border">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="your name" className="input input-bordered dark:bg-zinc-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered dark:bg-zinc-700" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text dark:text-white">Password</span>
                        </label>
                        <div className=" relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered w-full mx-auto py-2 px-4 dark:bg-zinc-700" required />
                            <span className="absolute top-4 right-6" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                            </span>
                        </div>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-outline dark:btn-neutral dark:text-white">Register</button>
                        <ToastContainer />
                        {
                            registerError && <p className=" text-red-600 mt-2">{registerError}</p>
                        }
                    </div>
                    <p>Have an account? <NavLink className=" font-bold" to="/login">Login</NavLink></p>
                </form>
            </div>

        </div>
    );
};


export default Register;