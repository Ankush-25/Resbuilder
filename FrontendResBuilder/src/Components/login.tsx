import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../Service/authService';

export function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await authService.login(email, password);
        navigate('/app');
    }
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white antialiased min-h-screen flex flex-row overflow-hidden">
            {/* Left Section: Visual/Marketing (Hidden on mobile, visible on lg screens) */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-100 dark:bg-gray-800 items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div
                        className="w-full h-full bg-center bg-no-repeat bg-cover"
                        data-alt="Modern minimalist office workspace with a laptop, coffee cup, and notepad on a wooden desk"
                        style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUCNgPNBBZrNaNS_ykV5l5_J6zGWqWj80Xi_tIjeHG28CCyvcp8SjlXFB_fDG7Ye64Cy4_qWo1yUB3lQPXOMOaW-Ah4b6CTD6lyizn_Hq7S12_Hd8glZJNv5G3HhKc4K_dA9T887TBLKncQLhY33bAAOPHJ7DYlCD23AFyzNIH2pm4ezeMiFt9GJOHuL0w2nydew-EYNZ4iarcpySUHrIVcnVy-Nj3B82GNnj76O5UFoo4JclgjGwgKQFIW9UtFxkRTtWbTlCpSXs")' }}
                    >
                    </div>
                    {/* Overlay for better text readability and mood */}
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="relative z-10 p-12 text-white max-w-lg mt-auto mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="size-10 flex items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm border border-white/10">
                            <span className="material-symbols-outlined text-white text-2xl">description</span>
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight">ResumeGen</h2>
                    </div>
                    <h1 className="text-4xl font-bold mb-4 leading-tight">Land your dream job with a perfect resume.</h1>
                    <p className="text-lg text-white/90">Join thousands of professionals who have advanced their careers with our AI-powered resume builder.</p>
                    <div className="mt-8 flex gap-3">
                        <div className="flex -space-x-4 rtl:space-x-reverse">
                            <img alt="Female user portrait" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" data-alt="Smiling woman portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpx2sqqwEMa_q-ureIxrzUixFwIbUZdSxxtHzSztiqJy2Unvbi8pdwZ3CCK2NEov0HLgrOz4VN0-Q76yp0OPth1g0tglahPe8uAzQIDyZQEgvgKp8HJu1tAFD_v6UuMtIwL5A91FI1MLveq0PcuCXYTy8SgZkT2bXiBQJXh1-0WQKwqybMIocTdTRW1WdeIAYJA5U8Lv_1pvVUeyj30tBamuaYsSWEsGX_KB0-xa5nawyVc5WhPUQRdwBLuVMA36uabXKI3T9d9qE" />
                            <img alt="Male user portrait" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" data-alt="Man looking at camera" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdXx86PpExLL0TSz1Gxe_adF2Lerbiuo5CJ5dcLtBrTjRSGLvKmCQGYXVfWLL2Yh07BLv7o3kq0tHSZ-mFP0UUV7QbUOEqracNPD3z1RcFil7WTKZZcimvZCFpgKtyHngCxKr_3kukvYdgwIrH9422rxjONzR2TTH0ovhFymdANcLu_iPLoLNv4PEXkYH8NiwpyGfmn7p90p9F6OZ0bntlWi9OQA2DUSzr6SXtVzC0HhFEJ-Va02kWuEstydWL-JLACdtOxgm5VUM" />
                            <img alt="Male user portrait" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800 object-cover" data-alt="Smiling man portrait" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm_3YYowMjfTO8FHiq7PvWR6gkwpzWtejPmJdr2iDGnzzHVwPpUIUi_NT3ZHklMBk0eN2GFKqf6DPQ0TXPyYvILlg21RVgoQgHkI_d8NTl-KgAJ8Yujr4TgFzOx_FL_TsY1_W0fqnmiy8zSfsTvXtURWasbq41DaN91CMCQTNiwyvcZTLDUJKEileTlnPRPnUgnsBs9YpuBcm3If5g3E1QtTmE_IhTNBQ-dDZlRyhbyGDkiglWHYu0pTm-Yn2HXHeeYw77rdvwouE" />
                            <span className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full dark:border-gray-800">+2k</span>
                        </div>
                        <div className="flex flex-col justify-center ml-2">
                            <div className="flex text-yellow-400 text-sm">
                                <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                <span className="material-symbols-outlined text-[16px] fill-current" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            </div>
                            <span className="text-xs font-medium text-white/80">Trusted by professionals</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Section: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col h-full bg-white dark:bg-background-dark overflow-y-auto">
                {/* Mobile Header Logo */}
                <div className="lg:hidden p-6 flex items-center gap-2 border-b border-gray-100 dark:border-gray-800">
                    <div className="size-8 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl">description</span>
                    </div>
                    <h2 className="text-[#111318] dark:text-white text-xl font-bold tracking-tight">ResumeGen</h2>
                </div>
                <div className="flex flex-1 flex-col justify-center items-center p-6 md:p-12 lg:p-24">
                    <div className="w-full max-w-md space-y-8">
                        {/* Header Text */}
                        <div className="text-center md:text-left">
                            <h1 className="text-[#111318] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-2">Welcome Back</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">Continue building your professional resume.</p>
                        </div>
                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-transparent text-[#111318] dark:text-white font-medium text-sm focus:ring-2 focus:ring-offset-1 focus:ring-primary/20 cursor-pointer">
                                <img alt="Google Logo" className="w-5 h-5" data-alt="Google logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9W7K9Nx-Txu5mqCPYURdUujs9w1ouNvubp4BR1t9p8N3sL-32mhGZc_s7qg-uUkwmRSOasJAiBK2gOHMVkxAagaXIyNn79WKXHvIjOjZCq1hRgTukVbBhWCRyrap1IXc0F2-One8eJei9PIQNmE6osNsWPGdpKtA_qd0GttUXjJI5SUJBCBsuOF-n7Y9jpuFh4puWLxconoOGTgmgFwAI40U7AMPbd4zyA-hou6yvlDd9unSatVSO8loMzisz4kf0lYLbK9VGFYA" />
                                <span>Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 h-12 rounded-lg border border-[#dbdfe6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors bg-white dark:bg-transparent text-[#111318] dark:text-white font-medium text-sm focus:ring-2 focus:ring-offset-1 focus:ring-primary/20 cursor-pointer">
                                <img alt="LinkedIn Logo" className="w-5 h-5" data-alt="LinkedIn logo icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN8QsxBEhxDaM6jCAsvRxDicSItRgJggFPtzEhc7WLY6DOtsCHn9Y5Qqrg9CAdZiGZGMnEB7YegVzmNcQ4pHQUmkUT6kokgEUyQHFRHk3oTyKo6RqBNUShI4GtoFzxK9HrEIfb6hJ1DzVTlN42zszYT9fqi52GLHQ_oXbRWn0GQbkG5wGzEKhevOfMVRQlmR4_UJ43WxpYnzYguLPd_IbFOVFHh6DtA-xSnp2r7mo8bfRB10O70zf85K23g-Xw8TczYQ9H_iJ4msg" />
                                <span>LinkedIn</span>
                            </button>
                        </div>
                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                            <span className="flex-shrink-0 mx-4 text-gray-400 text-xs uppercase font-medium tracking-wider">Or log in with email</span>
                            <div className="flex-grow border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        {/* Form */}
                        <form action="#" className="space-y-6" method="POST" onSubmit={(e) => { e.preventDefault(); handleOnSubmit(e); }}>
                            {/* Email Field */}
                            <div className="space-y-2">
                                <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="email">Email or Username</label>
                                <div className="relative">
                                    <input autoComplete="email" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 text-base font-normal leading-normal placeholder:text-[#616f89] dark:placeholder:text-gray-500 transition-all shadow-sm" id="email" placeholder="name@example.com" required type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>
                            {/* Password Field */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-[#111318] dark:text-gray-200 text-sm font-medium leading-normal" htmlFor="password">Password</label>
                                    <a className="text-sm font-medium text-primary hover:text-blue-700 transition-colors focus:underline focus:outline-none cursor-pointer" href="/ForgotPassword">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <input autoComplete="current-password" className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 focus:border-primary border border-[#dbdfe6] dark:border-gray-600 bg-white dark:bg-gray-800 h-12 px-4 pr-10 text-base font-normal leading-normal placeholder:text-[#616f89] dark:placeholder:text-gray-500 transition-all shadow-sm" id="password" placeholder="••••••••" required type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none focus:text-primary cursor-pointer" type="button">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </div>
                            {/* Remember Me & Submit */}
                            <div className="flex items-center">
                                <input className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary bg-white dark:bg-gray-700 dark:border-gray-600 cursor-pointer" id="remember-me" name="remember-me" type="checkbox" />
                                <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer" htmlFor="remember-me">Remember me</label>
                            </div>
                            <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-4 bg-primary hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-500/20 focus:ring-4 focus:ring-primary/20 outline-none" type="submit">
                                <span className="truncate">Log In</span>
                            </button>
                        </form>
                        {/* Footer */}
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                            Don't have an account?
                            <Link className="font-bold text-primary hover:text-blue-700 transition-colors focus:underline focus:outline-none ml-1" to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
                {/* Simple Footer for copyright */}
                <div className="p-6 text-center lg:text-left border-t border-gray-50 dark:border-gray-800 lg:border-none">
                    <p className="text-xs text-gray-400 dark:text-gray-600">© 2025 ResumeGen Inc. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}
