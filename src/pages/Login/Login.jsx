import loginImg from './../../assets/others/authentication2.png'
import loginBg from './../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(4);
    }, [])

    const hendleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                Swal.fire({
                    title: "Good job!",
                    text: "Successfully Login",
                    icon: "success"
                });
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.log(err.message);
            })




    }




    const hendleCaptcha = () => {
        const captchaValue = captchaRef.current.value;

        if (!validateCaptcha(captchaValue)) {

            setDisable(true)
        }

        else {
            setDisable(false)

        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div style={{ backgroundImage: `url("${loginBg}")` }} className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm  ">
                        <h3 className='font-bold text-3xl text-center'>Login</h3>
                        <form onSubmit={hendleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email here" className="input input-bordered rounded-sm" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered rounded-sm" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    < LoadCanvasTemplate />
                                </label>
                                {/* TODO:add required in captcha input */}
                                <input onBlur={hendleCaptcha} ref={captchaRef} type="text" name="captcha" placeholder="Type captcha here" className="input input-bordered rounded-sm" />

                            </div>
                            <div className="form-control mt-6 ">
                                {/* TODO:disabled={disable} */}
                                <button disabled={false} type='submit' className="btn btn-warning text-white bg-[#D1A054]">Login</button>
                            </div>
                        </form>
                        <Link to='/signup'><p className='text-[#D1A054] text-center'>New here? Create a New Account</p></Link>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;