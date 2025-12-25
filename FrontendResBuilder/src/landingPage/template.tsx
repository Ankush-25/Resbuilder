
export function TemplateGallery() {
    return (
        <main className="flex-1 w-full bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 flex flex-col min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-slate-900 py-16 lg:py-24 overflow-hidden">
                {/* Abstract background pattern */}
                <div className="absolute inset-0 z-0 opacity-40 bg-cover bg-center" data-alt="Abstract blurry blue and purple gradient background" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmoEKcezbY0Tn_yH7i1c37wyfaTN44uZQsCoeM1MoG0r4kPcLkp7Ecy_6bVNPA4AsYPxHa9Z2lS68vgO2Qb3W5TpjStI-_JPxrtwOQxBQlaTY7-tceR1S2riUr_DLiUHwWSMp0KquhQbOjeV8dtr92xUrRUFbUbTQkWJztWNkhI1l_ygFFQ-fUfm9zjZ1WWSS5NBeYPdcc3lHScPwKuml6u2S9TArXQFVVm2R6sq7dcrPTSUZQCT-UM4rQREdhQv2_Kqz-JbFkwvs')" }}></div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
                <div className="container relative z-10 mx-auto px-4 lg:px-8 text-center">
                    <h1 className="mx-auto max-w-3xl text-4xl font-black tracking-tight text-white lg:text-5xl mb-6">
                        Choose your perfect resume template
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-slate-300 mb-10">
                        Stand out with a professional resume designed by HR experts. Fully customizable, ATS-friendly, and ready in minutes.
                    </p>
                    {/* Search Bar */}
                    <div className="mx-auto max-w-2xl">
                        <div className="relative flex items-center w-full h-14 rounded-xl shadow-2xl bg-white overflow-hidden ring-4 ring-white/10 focus-within:ring-primary/50 transition-all">
                            <div className="grid place-items-center h-full w-12 text-slate-400">
                                <span className="material-symbols-outlined">search</span>
                            </div>
                            <input className="peer h-full w-full border-none bg-transparent pr-4 text-slate-900 placeholder-slate-400 focus:ring-0 text-base" placeholder="Search by job title (e.g., 'Product Manager') or style..." type="text" />
                            <button className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-blue-700 text-white font-medium px-6 rounded-lg transition-colors">
                                Search
                            </button>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-slate-400">
                            <span>Popular:</span>
                            <a className="text-white hover:underline decoration-primary underline-offset-4" href="#">Software Engineer</a>
                            <a className="text-white hover:underline decoration-primary underline-offset-4" href="#">Marketing</a>
                            <a className="text-white hover:underline decoration-primary underline-offset-4" href="#">Student</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Main Content Layout */}
            <div className="container mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row gap-8 items-start">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-72 shrink-0 space-y-8 lg:sticky lg:top-24">
                    {/* Filter Group: Categories */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-slate-900 dark:text-white">Categories</h3>
                            <button className="text-xs text-primary font-medium hover:underline">Clear</button>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-1.5 rounded-lg bg-primary text-white text-sm font-medium border border-primary transition-colors">All</button>
                            <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary transition-colors">Modern</button>
                            <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary transition-colors">Professional</button>
                            <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary transition-colors">Creative</button>
                            <button className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium border border-slate-200 dark:border-slate-700 hover:border-primary/50 hover:text-primary transition-colors">Academic</button>
                        </div>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-800" />
                    {/* Filter Group: Features */}
                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-900 dark:text-white">Features</h3>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary/20 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary" type="checkbox" />
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">ATS-Friendly</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input defaultChecked className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary/20 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary" type="checkbox" />
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">With Photo</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary/20 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary" type="checkbox" />
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">No Photo</span>
                            </label>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <div className="relative flex items-center">
                                    <input className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary/20 focus:ring-offset-0 transition-all checked:bg-primary checked:border-primary" type="checkbox" />
                                </div>
                                <span className="text-sm text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">Two Columns</span>
                            </label>
                        </div>
                    </div>
                    <hr className="border-slate-200 dark:border-slate-800" />
                    {/* Banner Ad / Pro Feature */}
                    <div className="rounded-xl bg-gradient-to-br from-primary to-blue-600 p-5 text-white shadow-lg">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                            <span className="material-symbols-outlined">star</span>
                        </div>
                        <h4 className="font-bold mb-1">Go Premium</h4>
                        <p className="text-sm text-blue-100 mb-4 leading-relaxed">Unlock all 50+ templates and advanced AI writing features.</p>
                        <button className="w-full py-2 bg-white text-primary text-sm font-bold rounded-lg hover:bg-blue-50 transition-colors">Upgrade Now</button>
                    </div>
                </aside>
                {/* Gallery Grid */}
                <div className="flex-1 w-full">
                    {/* Toolbar */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                        <p className="text-slate-500 dark:text-slate-400 font-medium">Showing <span className="text-slate-900 dark:text-white font-bold">12</span> of 48 templates</p>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Sort by:</span>
                            <div className="relative">
                                <select className="pl-3 pr-8 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-slate-700 dark:text-slate-200">
                                    <option>Most Popular</option>
                                    <option>Newest</option>
                                    <option>Alphabetical</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {/* Template Card 1 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Minimalist white resume template with clean typography" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkRwyuLE_49kZg6ge9RgWS_S8IksdCVc4nyI6p76KvdNTbxErj-CYLa9dlOxGdSay3qLnqZB2psCy5X2m_OEyPp4wk4rE_rJpBl-kfP4AnYEhrVGJXVaSyFIQCxMQQ16ChcyoqfzDytxgUsCZ7bpgWudkDpmw9XTZYumwF3rQQlySYyzjuj9ncexLflnS1gcc-dfSMPTHb2JbT0u_3J9-tkZ5pqEGSL8M0JqVpePCjA45HEVCTxJaWVM45T90qQQG5vYg_4_dMGA8" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    Popular
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Zurich</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Modern</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Clean and minimalist, perfect for tech.</p>
                            </div>
                        </div>
                        {/* Template Card 2 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Professional resume template with blue header accent" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAORgCSnMLoebyEywwO8XhZdpMPiLtCdB97_LntM5e_uOwTnPLGJsWGXFfuqBjspVUl8dzl3UYM_AbRxEFRJeKlRR_tSc_RLx4UVHxymAg2ExSEE3b6rNC23XkT93Dh_Yo1pMuSl0OBOnXAh7YjC8yf__FpfiXOMpnEr8_mXhYCiY7GNAdk7ppZvyZw6r0xLFC15ZQgJvVFGvV-XoawYlaK8LBUWgxhqoi83R-A94zWtNt_4H3rxt0laAEiEdXcoPKkO5hshMp_fl8" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Harvard</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">Academic</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Traditional layout for serious roles.</p>
                            </div>
                        </div>
                        {/* Template Card 3 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Creative resume template with large typography and sidebar" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKi42RAHlL0T85Cr5Rm2zFybb6YQP-b5aIAnH3jQQXeklIt5JGzFwSotVunnAIqbltw7F34iq7ykR7uY0OUC1co2gfK4vKuSTmu9NqaoIp5WxDSC7QKlaG8nGSbnw6UupF-5nTSm41ErepnOK4MHMhp494sv1GgxtQN9cZd81gl0-uPvctfcGp4xxYbC7Jewra6Ms7Qlg_RKbPH1DD-dCwBDDxb0SRI-CSk1REqgkNH_xTC2o0W8IkNHBjUjJNRmoYQJUSM7KbZ3s" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">lock</span> Pro
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Creative</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">Creative</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Bold colors for designers and artists.</p>
                            </div>
                        </div>
                        {/* Template Card 4 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Simple single column resume template" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDfR82LGQr2fx2QocCV7No2M-zSKv5OklBHeluVzfh918T1rIG0r6kv5rsy0ZPcDNzCfXj1H5CVL4EPHBJSVdTdiIkwANgrzeVcM3HQ1EoERV28DVq2xfrM5x2R3LPg6Gk20maJvE767zBl-_zAogpELPfBUZG5Kpqceys9XqblyTWXTLGs6FedxDy85vq8-3t97MnAnPN_K93JcQbF9uO7T9WkpD7TlxjFYSJ4_py_xUI3pJQe17Ova_Frpms-QjcuCN6cSARemg" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Executive</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">Professional</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Information-dense for experienced pros.</p>
                            </div>
                        </div>
                        {/* Template Card 5 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Modern split column resume design" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHtYmJiSnGOXvsKHghRgvtPc57cnB2REhtjTdYxf67KZK6ZeYjAGMPMcaB7DPvcHbKNGW0qPIgEPjY2JU-1JoLnoYVyazlgSvukpdLeCBgrIEB-2TMcpns_bIlC4Qq89CtfJp_zN6IwWNbcGQ6zryA6i5yB6xkY08NufiCHWoUdO8GaNcSa8D7iOIY6iPeHVaRRtAB3qCylwareVqA7Pldybn4YNch9A0BhZC26pMJ0Uw_il9pqtVbuD8ws3Fz89F_SPnmky3zlA8" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                                {/* Badge */}
                                <div className="absolute top-3 right-3 bg-amber-400 text-slate-900 text-xs font-bold px-2 py-1 rounded shadow-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">lock</span> Pro
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">Silicon Valley</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">Modern</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Optimized for startups and tech giants.</p>
                            </div>
                        </div>
                        {/* Template Card 6 */}
                        <div className="group flex flex-col gap-3">
                            <div className="relative aspect-[210/297] w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/30 group-hover:-translate-y-1">
                                <img alt="Classic elegant resume design" className="h-full w-full object-cover object-top" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDepMTkG-aO4twP9moZTP7gD1sUC7RkNEIvoHCP1Xo245Bc9eDpo8NAxE75oq4KuMnixwhwhqISq9TTlyzdCTvHm_H0iTijM-yTNHEcI-gU7T0j4W2HqoD5WsAnvDVlqSZw-adoLra4DPRXrHW9xjiBFSHci8jfFm58zrUtNKcQ-GdevBnxCuMmQKaPuh0H6NYJ-1eKR6t6C9H_x9wFKCjD834Y9XXBIYHaj01xpATKqDW4HAWHl4OD5u4I-_PnPEe4cN2oGdU9K50" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-3 backdrop-blur-[2px]">
                                    <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2.5 px-6 rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                                        Use Template
                                    </button>
                                    <button className="bg-white/20 hover:bg-white/30 text-white font-medium py-2 px-6 rounded-lg backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75">
                                        Preview
                                    </button>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors">The Minimalist</h3>
                                    <span className="text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">Simple</span>
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Focus on content, no distractions.</p>
                            </div>
                        </div>
                    </div>
                    {/* Pagination */}
                    <div className="mt-12 flex justify-center">
                        <nav aria-label="Pagination" className="flex items-center gap-2">
                            <a className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" href="#">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </a>
                            <a className="px-4 py-2 rounded-lg bg-primary text-white font-medium" href="#">1</a>
                            <a className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800" href="#">2</a>
                            <a className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800" href="#">3</a>
                            <span className="px-2 text-slate-400">...</span>
                            <a className="px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-800" href="#">8</a>
                            <a className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </main>
    );
}
