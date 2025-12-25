import { Link } from 'react-router-dom';

export function ForgotPassword() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white min-h-screen flex flex-col">
            {/* Top Navbar */}
            <header className="w-full bg-white dark:bg-[#1e2330] border-b border-[#f0f2f4] dark:border-[#2a303c] px-6 lg:px-10 py-3 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link className="flex items-center gap-3 group" to="/">
                            <div className="size-8 text-primary">
                                <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-tight">ResumeGen</h2>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Remember your password?</span>
                        <Link className="text-sm font-semibold text-primary hover:text-blue-700 dark:hover:text-blue-400 transition-colors" to="/login">Log in</Link>
                    </div>
                </div>
            </header>
            {/* Main Content Area */}
            <main className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-[480px] bg-white dark:bg-[#1e2330] rounded-xl shadow-lg border border-[#e5e7eb] dark:border-[#2a303c] overflow-hidden">
                    {/* Icon Header */}
                    <div className="flex flex-col items-center pt-10 pb-4 px-8 text-center">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                            <span className="material-symbols-outlined text-[32px]">lock_reset</span>
                        </div>
                        <h1 className="text-[#111318] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] mb-2">Forgot Password?</h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-relaxed">
                            No worries, we'll send you reset instructions to get you back on track.
                        </p>
                    </div>
                    {/* Form Section */}
                    <div className="px-8 pb-10">
                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            {/* Email Input */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="email">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                        <span className="material-symbols-outlined text-[20px]">mail</span>
                                    </div>
                                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 border border-[#dbdfe6] dark:border-[#3f4756] bg-white dark:bg-[#101622] focus:border-primary focus:ring-1 focus:ring-primary h-12 pl-10 pr-4 text-base font-normal leading-normal transition-all duration-200" id="email" name="email" placeholder="name@example.com" required type="email" />
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-700 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-sm" type="submit">
                                <span className="truncate">Reset Password</span>
                            </button>
                        </form>
                        {/* Back to Login Link */}
                        <div className="mt-6 flex justify-center">
                            <Link className="group inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-colors" to="/login">
                                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
                                Back to log in
                            </Link>
                        </div>
                    </div>
                    {/* Footer Help Text */}
                    <div className="bg-[#f9fafb] dark:bg-[#161b26] py-4 px-8 border-t border-[#e5e7eb] dark:border-[#2a303c] text-center">
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Don't have an account? <Link className="text-primary hover:underline font-medium" to="/signup">Sign up for free</Link>
                        </p>
                    </div>
                </div>
            </main>
            {/* Simple Footer */}
            <footer className="py-6 text-center">
                <p className="text-sm text-gray-400 dark:text-gray-600">
                    © 2025 ResumeGen Inc. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
