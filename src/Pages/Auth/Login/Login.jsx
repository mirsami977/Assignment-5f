import React from "react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import SocialLogin from "../SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        loginUser(data.email, data.password)
            .then(() => {
                Swal.fire("Login Successful!", "Welcome back!", "success");
                navigate("/");
            })
            .catch((err) => {
                Swal.fire("Login Failed", err.message, "error");
            });
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-full max-w-sm rounded-lg bg-gray-50 border border-gray-200 p-4 mx-2">

                {/* Logo */}
                <div className="py-4 flex justify-center">
                    <svg width="40" height="40" viewBox="0 0 59 40" fill="none">
                        <path d="M10 15.1533L56.0254 27.3643C57.7788 27.8295 59 29.4164 59 31.2305V40H49V35.8457L29.501 30.6729L10 35.8457V40H0V31.2305C4.53996e-06 29.4164 1.22118 27.8295 2.97461 27.3643L10.001 25.499L2.97461 23.6357C1.22116 23.1706 3.02567e-05 21.5836 0 19.7695V14C0 11.7909 1.79086 10 4 10H10V15.1533Z" fill="#0BDC85"></path>
                        <path d="M55 10C57.2091 10 59 11.7909 59 14V20H49V10H55Z" fill="#0BDC85"></path>
                        <path d="M45 0C47.2091 0 49 1.79086 49 4V10H10V4C10 1.79086 11.7909 2.81866e-08 14 0H45Z" fill="#0BDC85"></path>
                    </svg>
                </div>

                <h1 className="mb-4 text-center text-2xl font-semibold">Login to your account</h1>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required" })}
                            placeholder="name@example.com"
                            className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div className="mb-4">
                        <label className="mb-1 block text-sm text-gray-400">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: "Password is required" })}
                            placeholder="Enter your password"
                            className="py-2 w-full rounded border border-gray-300 bg-slate-100 px-2 text-center"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <p className="text-center mt-3 text-sm">
                        Don’t have an account?{" "}
                        <Link to="/Register" className="text-blue-500 underline">
                            Create Account
                        </Link>
                    </p>

                    <button
                        type="submit"
                        className="mt-4 py-2.5 font-medium w-full rounded bg-green-500 text-white hover:bg-green-600"
                    >
                        Login
                    </button>
                </form>

                {/* Divider */}
                <div className="relative my-8 text-center">
                    <span className="relative z-10 bg-gray-100 px-3 text-gray-400">
                        Or continue with
                    </span>
                    <div className="absolute top-1/2 left-0 h-px w-2/5 bg-gray-300"></div>
                    <div className="absolute top-1/2 right-0 h-px w-2/5 bg-gray-300"></div>
                </div>

                {/* Social Login */}
                <SocialLogin />

                <p className="mt-8 text-center text-sm text-gray-400">
                    By continuing, you agree to our
                    <a href="#" className="underline"> Terms of Service</a> and
                    <a href="#" className="underline"> Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};

export default Login;
