import { Helmet } from 'react-helmet';
import loginBg from '../../assets/others/authentication.png'
import sideImg from '../../assets/others/authentication1.png'
import { useForm } from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createNewUser, userUpdateProfile } = useAuth()
    const {
        register,
        reset,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)

        createNewUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                userUpdateProfile(data.name, data.photoURL)
                    .then(result => {
                        console.log(result)
                        Swal.fire({
                            title: "Successfully Sign Up!",
                            icon: "success",
                            draggable: true
                        });
                        reset()
                    })
                    .catch(error => {
                        console.log(error, 'error')
                    })
            })
            .catch(error => {
                console.log(error, "error")
            })
    }
    // console.log(watch("example"))


    return (

        <div className="hero bg-base-200 h-[700px]"
            style={{ backgroundImage: `url(${loginBg})` }}>
            <Helmet>
                <title>Bistro Boss || Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse gap-15 ">
                <div className="text-center lg:text-left">
                    <img className='w-120 mt-8' src={sideImg} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm h-full shrink-0 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl font-bold text-center" >Sign UP!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name"{...register("name", { required: true })} className="input input-bordered w-full " />
                            {errors.name && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="url" placeholder="Photo URL"{...register("photoURL", { required: true })} className="input input-bordered w-full " />
                            {errors.photoURL && <span className='text-red-600'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' {...register("email", { required: true })} className="input input-bordered w-full" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} placeholder="password" name='password' {...register("password", {
                                required: true,
                                minLength: 6, maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[a-z].*[a-z]).{6}/
                            })}

                                className="input input-bordered w-full" />
                            {errors.password?.type === "minLength" && (
                                <p role="alert">Password Should be 6 characters</p>
                            )}
                            {errors.password?.type === "required" && (
                                <p role="alert">Password is required</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p role="alert">Password must be have one uppercase,one lower case, one number, and one special characters</p>
                            )}
                            <div >
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className='absolute right-2 top-9 -translate-y-1/2 cursor-pointer '
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </span> <br />
                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary w-full"><input type="submit" value="Sign Up" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;