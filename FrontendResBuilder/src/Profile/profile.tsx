
export function Profile() {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen flex flex-col overflow-x-hidden">
            {/* Top Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <div className="size-8 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">ResumeGenie</h2>
                </div>
                <div className="flex flex-1 justify-end gap-6 items-center">
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Dashboard</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">My Resumes</a>
                        <a className="text-slate-600 dark:text-slate-300 hover:text-primary text-sm font-medium leading-normal transition-colors" href="#">Cover Letters</a>
                    </nav>
                    <button className="relative flex cursor-pointer items-center justify-center rounded-lg size-10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <span className="material-symbols-outlined text-2xl">notifications</span>
                        <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-slate-900"></span>
                    </button>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-9 cursor-pointer ring-2 ring-transparent hover:ring-primary/20 transition-all" data-alt="User profile thumbnail showing a smiling face" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJfWteRQTTLaLf2m4scFRCNjV310sJxuGTkwRnBIXSj893ttJswet40nDwE4oNX61pDS4P3IMBAPZ0WerD5gCmEvKH801VbpLnbND_6DTn-SzJ9X8xeVEB137K9Zf3F8j7lIq2VoLLB3016m73LOKYaCATJWvAQAovYruz0XE7UOKxLhnMwLJKUmsfp5kQYp_zbgb688itoUD8hpsUchj11qbfXjkaPD8UA7-UMxrO36jNLRicj25ZWG6IKkpsMb4Vx-tYYyU3sUA")' }}></div>
                </div>
            </header>
            {/* Main Content Wrapper */}
            <div className="flex-1 flex justify-center py-8 px-4 sm:px-6 md:px-8">
                <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className="w-full md:w-64 lg:w-72 shrink-0">
                        <div className="sticky top-24 flex flex-col gap-6">
                            {/* User Mini Profile */}
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-100 dark:border-slate-800">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="User profile large avatar" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAviE_mPuXFfBzO1HCApIJvfPk7u0e6NxOUvI2vqs97cY-e1hmAOvtz03-ihVVZbq5AIXu6ssFhDEZYpQ2Szy9yAPAPXYiqg5o26yql5BEcfdJmP_pcPxHvJkS5OpJMIPHulLnxAR9xEcEuToqEvTI_stSt1GhlvyS-ERiUWBdlbtfQ9cg-g4i_MZ90bmqldK7QSF21VoS-vA8a80rraXAOJB1dj1-dMXM7tyVFBAiCI7xhLevT94eP-iRhXYyFLudO5_7vacxdwR8")' }}></div>
                                <div className="flex flex-col overflow-hidden">
                                    <h1 className="text-slate-900 dark:text-white text-base font-bold truncate">Alex Morgan</h1>
                                    <p className="text-primary text-xs font-semibold uppercase tracking-wide">Pro Member</p>
                                </div>
                            </div>
                            {/* Navigation Links */}
                            <nav className="flex flex-col gap-1">
                                <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-primary/10 text-primary transition-all" href="#">
                                    <span className="material-symbols-outlined fill" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>person</span>
                                    <span className="text-sm font-semibold">General Profile</span>
                                </a>
                                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all" href="#">
                                    <span className="material-symbols-outlined">lock</span>
                                    <span className="text-sm font-medium">Login &amp; Security</span>
                                </a>
                                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all" href="#">
                                    <span className="material-symbols-outlined">description</span>
                                    <span className="text-sm font-medium">Resume Preferences</span>
                                </a>
                                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all" href="#">
                                    <span className="material-symbols-outlined">credit_card</span>
                                    <span className="text-sm font-medium">Billing &amp; Plans</span>
                                </a>
                                <a className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white transition-all mt-2" href="#">
                                    <span className="material-symbols-outlined">logout</span>
                                    <span className="text-sm font-medium">Sign Out</span>
                                </a>
                            </nav>
                        </div>
                    </aside>
                    {/* Main Form Area */}
                    <main className="flex-1 min-w-0">
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden">
                            {/* Page Header */}
                            <div className="border-b border-slate-100 dark:border-slate-800 p-6 md:p-8">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">General Profile</h1>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base">Manage your personal information and how it appears on your generated resumes.</p>
                                </div>
                            </div>
                            <form className="divide-y divide-slate-100 dark:divide-slate-800" onSubmit={(e) => e.preventDefault()}>
                                {/* Avatar Section */}
                                <div className="p-6 md:p-8">
                                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                                        <div className="relative group cursor-pointer">
                                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 md:size-28 ring-4 ring-slate-50 dark:ring-slate-800" data-alt="User profile avatar preview" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVYOsTrtBK2jIGF9cC5tHOfY7J89cszi9SFibQVGtmpB3EoXFbsN_waCxAELCeBHwvg7fl5I51dXQO_ReskmNCRBgXzIJO2Yp9ARcnLnHfA2VlMs84ISfrg0yFQcQoUudR_wvWbaw09JiJjNGVJ4UvlBAzDxJNYiwGixtIwDVFDUyyYIINRj_e8yobRbYTjW-VutyOtR9u7b3R4mEsN9880tQlVvxD9SSLu6MedTVNTzYF2b-H77pF5GMHf5iFLe1--kN_80fBoaM")' }}></div>
                                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="material-symbols-outlined text-white">edit</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3 flex-1">
                                            <h3 className="text-slate-900 dark:text-white font-semibold text-lg">Profile Picture</h3>
                                            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">We recommend an image of at least 400x400px. JPG or PNG allowed.</p>
                                            <div className="flex flex-wrap gap-3 mt-1">
                                                <button className="inline-flex items-center justify-center px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-sm font-semibold rounded-lg transition-colors" type="button">
                                                    Upload New Photo
                                                </button>
                                                <button className="inline-flex items-center justify-center px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 text-sm font-semibold rounded-lg transition-colors" type="button">
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Personal Details */}
                                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Personal Details</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">This information will be used as the header of your resume.</p>
                                    </div>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</span>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" type="text" defaultValue="Alex" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</span>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" type="text" defaultValue="Morgan" />
                                    </label>
                                    <label className="flex flex-col gap-2 md:col-span-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Headline / Job Title</span>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" type="text" defaultValue="Senior Product Designer" />
                                        <span className="text-xs text-slate-500">Suggested: <span className="text-primary cursor-pointer hover:underline">UX Designer</span>, <span className="text-primary cursor-pointer hover:underline">Product Manager</span></span>
                                    </label>
                                    <label className="flex flex-col gap-2 md:col-span-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Professional Summary</span>
                                        <textarea className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm resize-y" placeholder="Briefly describe your professional background..." rows={4} defaultValue="Passionate product designer with over 5 years of experience in building user-centric digital products. Skilled in UI/UX, prototyping, and design systems."></textarea>
                                    </label>
                                </div>
                                {/* Contact Information */}
                                <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="md:col-span-2">
                                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">Contact Information</h3>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">How can recruiters reach you?</p>
                                    </div>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</span>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">mail</span>
                                            <input className="w-full rounded-lg pl-10 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 focus:border-slate-300 focus:ring-0 shadow-sm h-11 cursor-not-allowed" disabled type="email" defaultValue="alex.morgan@example.com" />
                                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 material-symbols-outlined text-[20px]" title="Verified">check_circle</span>
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</span>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" type="tel" defaultValue="+1 (555) 012-3456" />
                                    </label>
                                    <label className="flex flex-col gap-2 md:col-span-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Website / Portfolio</span>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 material-symbols-outlined text-[20px]">language</span>
                                            <input className="w-full rounded-lg pl-10 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" placeholder="https://" type="url" />
                                        </div>
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">City</span>
                                        <input className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11" type="text" defaultValue="San Francisco" />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Country</span>
                                        <select className="w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:border-primary focus:ring-primary shadow-sm h-11">
                                            <option>United States</option>
                                            <option>Canada</option>
                                            <option>United Kingdom</option>
                                            <option>Germany</option>
                                        </select>
                                    </label>
                                </div>
                                {/* Preferences */}
                                <div className="p-6 md:p-8">
                                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Preferences</h3>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">Open to Work</span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">Show a badge on your public profile indicating you are hiring.</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input defaultChecked className="sr-only peer" type="checkbox" />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                        <div className="flex items-center justify-between p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-medium text-slate-900 dark:text-white">Email Notifications</span>
                                                <span className="text-xs text-slate-500 dark:text-slate-400">Receive tips and updates about your resume performance.</span>
                                            </div>
                                            <label className="relative inline-flex items-center cursor-pointer">
                                                <input className="sr-only peer" type="checkbox" />
                                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 dark:peer-focus:ring-primary/30 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Action Bar */}
                                <div className="p-6 md:p-8 bg-slate-50 dark:bg-slate-900/50 sticky bottom-0 z-10 flex items-center justify-end gap-4 border-t border-slate-200 dark:border-slate-800">
                                    <button className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all" type="button">
                                        Cancel
                                    </button>
                                    <button className="px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-primary hover:bg-blue-700 focus:ring-4 focus:ring-primary/30 transition-all shadow-md shadow-primary/20" type="submit">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
