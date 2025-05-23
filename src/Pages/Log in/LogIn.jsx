import { Helmet } from 'react-helmet';
import loginBg from '../../assets/others/authentication.png'
import sideImg from '../../assets/others/authentication1.png'
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { Eye, EyeOff } from 'lucide-react';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [disabled, setDisabled] = useState(true)
    const { userSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || "/"

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        userSignIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Successfully Log In!",
                    icon: "success",
                    draggable: true
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.lgo("Error", error)
            })
    }
    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
    }

    return (
        <div className="hero bg-base-200 min-h-screen"
            style={{ backgroundImage: `url(${loginBg})` }}>

            <Helmet>
                <title>Bistro Boss || Log In</title>
            </Helmet>

            <div className="hero-content flex-col lg:flex-row-reverse gap-15 ">
                <div className="text-center lg:text-left">
                    <img className='w-120 mt-8' src={sideImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-bold text-center" >Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' className="input input-bordered w-full" required />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </span>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                < LoadCanvasTemplate />
                            </label>
                            <input type="text" onBlur={handleValidateCaptcha} placeholder="Type the text captcha" name='captcha' className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary w-full">Login</button>
                            <p className='mt-1'>New Here <span className='font-bold text-amber-800'><Link to='/signUp'>Click Here</Link></span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LogIn;