import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { GraduationCap, Eye, EyeOff, ArrowRight } from 'lucide-react'

const Signin = () => {

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)

        // Backend authentication will be connected later
    }


    return (
        <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center px-4 py-8">

            <div className="w-full max-w-md">

                {/* Logo */}

                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 mb-8"
                >

                    <div className="w-10 h-10 rounded-xl bg-[#F7E7DE] text-[#C67A52] flex items-center justify-center">
                        <GraduationCap className="w-5 h-5" />
                    </div>

                    <span className="text-xl font-bold text-[#2C2C2C]">
                        CampusMarket
                    </span>

                </Link>


                {/* Card */}

                <div className="bg-white border border-[#E5E2DC] rounded-2xl p-6 sm:p-8 shadow-[0_10px_40px_rgba(44,44,44,0.05)]">

                    <div className="text-center">

                        <h1 className="text-2xl font-bold text-[#2C2C2C]">
                            Welcome back
                        </h1>

                        <p className="text-xs text-[#9A9A9A] mt-2">
                            Sign in to continue to CampusMarket.
                        </p>

                    </div>


                    <form
                        onSubmit={handleSubmit}
                        className="mt-7 flex flex-col gap-4"
                    >

                        {/* Email */}

                        <div>

                            <label className="text-xs font-medium text-[#2C2C2C]">
                                Email address
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                required
                                className="w-full h-11 mt-2 px-3 bg-white border border-[#E5E2DC] rounded-lg text-sm text-[#2C2C2C] outline-none focus:border-[#C67A52] transition-colors"
                            />

                        </div>


                        {/* Password */}

                        <div>

                            <div className="flex items-center justify-between">

                                <label className="text-xs font-medium text-[#2C2C2C]">
                                    Password
                                </label>

                                <button
                                    type="button"
                                    className="text-xs text-[#C67A52] hover:text-[#A86540] cursor-pointer"
                                >
                                    Forgot password?
                                </button>

                            </div>


                            <div className="relative mt-2">

                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    required
                                    className="w-full h-11 px-3 pr-10 bg-white border border-[#E5E2DC] rounded-lg text-sm text-[#2C2C2C] outline-none focus:border-[#C67A52] transition-colors"
                                />

                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9A9A9A] hover:text-[#2C2C2C] cursor-pointer"
                                >

                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}

                                </button>

                            </div>

                        </div>


                        {/* Submit */}

                        <button
                            type="submit"
                            className="w-full h-11 mt-2 flex items-center justify-center gap-2 bg-[#C67A52] hover:bg-[#A86540] text-white text-sm font-medium rounded-lg cursor-pointer transition-colors"
                        >

                            Sign in

                            <ArrowRight className="w-4 h-4" />

                        </button>

                    </form>


                    {/* Divider */}

                    <div className="flex items-center gap-3 my-6">

                        <div className="flex-1 h-px bg-[#E5E2DC]" />

                        <span className="text-[10px] text-[#9A9A9A]">
                            OR
                        </span>

                        <div className="flex-1 h-px bg-[#E5E2DC]" />

                    </div>


                    {/* Create account */}

                    <p className="text-center text-xs text-[#6B6B6B]">

                        Don't have an account?{' '}

                        <Link
                            to="/signup"
                            className="text-[#C67A52] hover:text-[#A86540] font-medium"
                        >
                            Create one
                        </Link>

                    </p>

                </div>


                <p className="text-center text-[10px] text-[#9A9A9A] mt-5">
                    CampusMarket · Buy and sell on campus.
                </p>

            </div>

        </div>
    )
}

export default Signin