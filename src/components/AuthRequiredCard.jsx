import React from 'react'
import { X, GraduationCap, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AuthRequiredCard = ({ onClose }) => {

    const navigate = useNavigate()

    const handleSignUp = () => {
        onClose()
        navigate('/signup')
    }

    const handleSignIn = () => {
        onClose()
        navigate('/signin')
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">

            {/* BACKDROP */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            />

            {/* CARD */}
            <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl border border-[#E5E2DC] shadow-[0_20px_50px_rgba(44,44,44,0.12)] p-6">

                {/* CLOSE */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-1.5 rounded-lg text-[#9A9A9A] hover:bg-[#F5F2EC] hover:text-[#2C2C2C] transition-colors cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </button>


                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#F5F2EC] text-[#C67A52] mb-5">
                    <GraduationCap className="w-6 h-6" />
                </div>


                {/* TEXT */}
                <div className="pr-6">
                    <h2 className="text-xl font-semibold text-[#2C2C2C]">
                        Create an account
                    </h2>

                    <p className="text-sm text-[#9A9A9A] mt-2 leading-relaxed">
                        Sign up or sign in to use this feature and get the full CampusMarket experience.
                    </p>
                </div>


                {/* ACTIONS */}
                <div className="flex flex-col gap-3 mt-6">

                    <button
                        onClick={handleSignUp}
                        className="w-full flex items-center justify-center gap-2 bg-[#C67A52] text-white font-medium py-3 rounded-xl hover:bg-[#A86540] transition-colors cursor-pointer"
                    >
                        Create an account
                        <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                        onClick={handleSignIn}
                        className="w-full py-3 rounded-xl border border-[#E5E2DC] text-[#C67A52] font-medium hover:bg-[#F5F2EC] transition-colors cursor-pointer"
                    >
                        Sign in
                    </button>

                </div>


                {/* FOOTER */}
                <p className="text-center text-xs text-[#9A9A9A] mt-5">
                    Join CampusMarket and start buying & selling on campus.
                </p>

            </div>
        </div>
    )
}

export default AuthRequiredCard