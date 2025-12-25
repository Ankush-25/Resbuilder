
export function AboutUs() {
    return (
        <main className="flex-1 bg-background-light dark:bg-background-dark font-display text-[#0d121b] dark:text-white">
            <div className="layout-container flex h-full grow flex-col">
                {/* Hero Section */}
                <section className="flex flex-col items-center justify-center bg-white dark:bg-background-dark py-12 md:py-20 px-4">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full">
                        <div className="@container">
                            <div className="flex flex-col gap-8 px-4 py-6 md:flex-row items-center">
                                <div className="w-full md:w-1/2 flex flex-col gap-6 text-left">
                                    <h1 className="text-[#0d121b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                                        We help the world get hired
                                    </h1>
                                    <p className="text-[#0d121b] dark:text-gray-300 text-lg font-normal leading-relaxed">
                                        Our mission is to democratize career success by making professional resume building accessible to everyone, everywhere. We believe your skills should speak for themselves, not your formatting.
                                    </p>
                                    <div className="flex gap-4 pt-2">
                                        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors">
                                            <span className="truncate">Join Our Mission</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2">
                                    <div className="w-full aspect-[4/3] bg-center bg-no-repeat bg-cover rounded-xl shadow-lg" data-alt="Modern office team collaborating around a computer screen" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC-duBltuVY0JlOO1DZBCawiAH-j5XQ0lA8SN0KRdxYvHKueCgk0hk-fhN8IlI8XO7mDrjHzYK0EaP5daxCJkAr_KJK9j8rJwAFgPUcij-SxnjkAnHDDeKF-mqZPvzadmgmcTDfhU0YzlRhYEDRLoketCq3fJ_T8udUSzWP44EOB-8ZmANzLqecKcXKOdQyGpu0maNRcMVkB4zVLchiqazaI92BlYGIJa2arKv_f-mtPl5CLNDH7B_HaTDtyGOKWJoZapGupPdLnG8')" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Stats Section */}
                <section className="flex justify-center bg-[#f8f9fc] dark:bg-[#151c2b] py-12 border-y border-[#e7ebf3] dark:border-gray-800">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full px-4">
                        <div className="flex flex-wrap gap-4 md:gap-8 justify-between">
                            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#1a2332] shadow-sm border border-[#cfd7e7] dark:border-gray-700 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">description</span>
                                <p className="text-[#0d121b] dark:text-white tracking-light text-3xl font-bold leading-tight">1M+</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Resumes Created</p>
                            </div>
                            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#1a2332] shadow-sm border border-[#cfd7e7] dark:border-gray-700 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">work</span>
                                <p className="text-[#0d121b] dark:text-white tracking-light text-3xl font-bold leading-tight">500k+</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Users Hired</p>
                            </div>
                            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#1a2332] shadow-sm border border-[#cfd7e7] dark:border-gray-700 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">dashboard</span>
                                <p className="text-[#0d121b] dark:text-white tracking-light text-3xl font-bold leading-tight">50+</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Templates</p>
                            </div>
                            <div className="flex min-w-[140px] flex-1 flex-col gap-2 rounded-lg p-6 bg-white dark:bg-[#1a2332] shadow-sm border border-[#cfd7e7] dark:border-gray-700 text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-2">public</span>
                                <p className="text-[#0d121b] dark:text-white tracking-light text-3xl font-bold leading-tight">120+</p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-normal">Countries</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Values Section */}
                <section className="flex justify-center py-16 px-4 bg-white dark:bg-background-dark">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full">
                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-4 text-center md:text-left">
                                <h2 className="text-[#0d121b] dark:text-white text-3xl md:text-4xl font-bold leading-tight">Our Core Values</h2>
                                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-[720px]">
                                    We believe in building tools that empower you to take control of your career path.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Value 1 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#1a2332] p-6 hover:shadow-md transition-shadow">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">accessibility_new</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Accessibility</h3>
                                        <p className="text-[#4c669a] dark:text-gray-400 text-sm leading-relaxed">
                                            We design for everyone. Our tools are intuitive, easy to navigate, and built to ensure that technical skills aren't a barrier to a great resume.
                                        </p>
                                    </div>
                                </div>
                                {/* Value 2 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#1a2332] p-6 hover:shadow-md transition-shadow">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">shield</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Privacy First</h3>
                                        <p className="text-[#4c669a] dark:text-gray-400 text-sm leading-relaxed">
                                            Your career data is personal. We employ enterprise-grade encryption and never sell your data to third parties. It's yours alone.
                                        </p>
                                    </div>
                                </div>
                                {/* Value 3 */}
                                <div className="flex flex-col gap-4 rounded-xl border border-[#cfd7e7] dark:border-gray-700 bg-background-light dark:bg-[#1a2332] p-6 hover:shadow-md transition-shadow">
                                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-3xl">lightbulb</span>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-[#0d121b] dark:text-white text-xl font-bold">Empowerment</h3>
                                        <p className="text-[#4c669a] dark:text-gray-400 text-sm leading-relaxed">
                                            Beyond formatting, we provide guidance. We give you the confidence to apply for that dream job with a resume that stands out.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Timeline/Journey Section */}
                <section className="flex justify-center py-12 px-4 bg-[#f8f9fc] dark:bg-[#151c2b] border-t border-[#e7ebf3] dark:border-gray-800">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full">
                        <h2 className="text-[#0d121b] dark:text-white text-3xl font-bold leading-tight px-4 pb-10 text-center">Our Journey</h2>
                        <div className="relative px-4">
                            {/* Vertical line for mobile, customized for desktop if needed, keeping simple vertical stack here */}
                            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
                            <div className="flex flex-col gap-8">
                                {/* Milestone 1 */}
                                <div className="flex flex-col md:flex-row gap-6 relative group">
                                    <div className="hidden md:flex flex-col items-center absolute left-8 -translate-x-1/2">
                                        <div className="size-4 rounded-full bg-primary ring-4 ring-white dark:ring-[#151c2b]"></div>
                                    </div>
                                    <div className="md:pl-16 w-full">
                                        <div className="bg-white dark:bg-[#1a2332] p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
                                            <span className="text-primary font-bold text-sm mb-1 block">2020</span>
                                            <h3 className="text-lg font-bold text-[#0d121b] dark:text-white mb-2">The Idea is Born</h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                Frustrated by clunky word processors and expensive design software, a small team of developers decided to fix the resume writing process.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Milestone 2 */}
                                <div className="flex flex-col md:flex-row gap-6 relative group">
                                    <div className="hidden md:flex flex-col items-center absolute left-8 -translate-x-1/2">
                                        <div className="size-4 rounded-full bg-primary ring-4 ring-white dark:ring-[#151c2b]"></div>
                                    </div>
                                    <div className="md:pl-16 w-full">
                                        <div className="bg-white dark:bg-[#1a2332] p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
                                            <span className="text-primary font-bold text-sm mb-1 block">2021</span>
                                            <h3 className="text-lg font-bold text-[#0d121b] dark:text-white mb-2">Beta Launch & First 10k Users</h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                We released our MVP. The feedback was overwhelming. Job seekers loved the clean designs and simple interface. We hit 10,000 users in just 3 months.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Milestone 3 */}
                                <div className="flex flex-col md:flex-row gap-6 relative group">
                                    <div className="hidden md:flex flex-col items-center absolute left-8 -translate-x-1/2">
                                        <div className="size-4 rounded-full bg-primary ring-4 ring-white dark:ring-[#151c2b]"></div>
                                    </div>
                                    <div className="md:pl-16 w-full">
                                        <div className="bg-white dark:bg-[#1a2332] p-6 rounded-xl border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
                                            <span className="text-primary font-bold text-sm mb-1 block">2023</span>
                                            <h3 className="text-lg font-bold text-[#0d121b] dark:text-white mb-2">Global Expansion</h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                                With over 500k resumes generated, we expanded our template library to support international CV formats and multiple languages.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Team Section */}
                <section className="flex justify-center py-16 px-4 bg-white dark:bg-background-dark">
                    <div className="layout-content-container flex flex-col max-w-[960px] w-full">
                        <div className="text-center mb-10">
                            <h2 className="text-[#0d121b] dark:text-white text-3xl font-bold leading-tight mb-3">Meet the Builders</h2>
                            <p className="text-gray-600 dark:text-gray-400">The passionate team behind the platform.</p>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {/* Member 1 */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="size-32 rounded-full overflow-hidden border-2 border-[#e7ebf3] dark:border-gray-700">
                                    <img alt="Portrait of Alex smiling in a white shirt" className="w-full h-full object-cover" data-alt="Portrait of Alex smiling in a white shirt" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-1oNtBW-h1X2eswIXe1Xbz59joH4yLDouBcpzNT6zKvybulV38kUlNDoh462yXADG3Q0n-6XrpNPcj0QPlDcZtDkRtQwoFvPvrAxBBEDxvSoxYYE9z5EdDyh8srGxzY853GkRZyUdSYy198DFT_8kWY7Pxs6Tn8Ykr6qR2ceF619l3oj09kSOw8oKqmYTaA1alO98gVDFrHxX2eWU-8WlatVgmsI1H5tSL8Zaccmo_vYNzOdHG79zi0GOloQr4HcoQz4-WWWRco" />
                                </div>
                                <div>
                                    <h3 className="text-[#0d121b] dark:text-white font-bold text-lg">Alex Johnson</h3>
                                    <p className="text-primary text-sm font-medium">CEO & Founder</p>
                                </div>
                            </div>
                            {/* Member 2 */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="size-32 rounded-full overflow-hidden border-2 border-[#e7ebf3] dark:border-gray-700">
                                    <img alt="Portrait of Sarah smiling with nature background" className="w-full h-full object-cover" data-alt="Portrait of Sarah smiling with nature background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJUUG4c1X9kreamI3ihXxu-c9xDTv8ANAWAjl-QYGYK7TOCPv3HmGnfmHmIkDloV04ETQ6Ls4VRS_ckjXJYKTViu94lCC0L2344INW8Xkx0UC-NXx0fzO04tLMINOtBW7s_7tRV9hPdhGIv3LPBt07pJck-DNhEy5Ydudw-m6-h-SEiJTDn0cBIkrvMeKgIjppU9HKQUBq9_z8IKNv13Kbgd5gssuLz3vi7dOiCy0LhjFufoyWk_s3nJeYZonMRnXf5o5E98YxI7A" />
                                </div>
                                <div>
                                    <h3 className="text-[#0d121b] dark:text-white font-bold text-lg">Sarah Chen</h3>
                                    <p className="text-primary text-sm font-medium">Head of Product</p>
                                </div>
                            </div>
                            {/* Member 3 */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="size-32 rounded-full overflow-hidden border-2 border-[#e7ebf3] dark:border-gray-700">
                                    <img alt="Portrait of Marcus with glasses looking forward" className="w-full h-full object-cover" data-alt="Portrait of Marcus with glasses looking forward" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPYjtNjI0rvFbMrn1lhGWTOG1IyDdsIFncnM5qLrhci6XBQEsy8n_Wdg4MBFx-5Fgs0ygST8oCgS3CP26RnOMVj_6VxBW8D0ZGFtUF05SgerwnZNbCDL6hycrejPJIq_-V8LVBCyMdGYuwC6OyUSoxKpCId6utIZN4RS0noO6EeITYPSkz4VH17jYjubrnxMl9JI771tKPQbIDNk8rkKkZn9F-bM7bsrkoQcO7uIg99MH6DT2wzUmicWuJRF1-R4cF7pjeBN9D1M4" />
                                </div>
                                <div>
                                    <h3 className="text-[#0d121b] dark:text-white font-bold text-lg">Marcus Davis</h3>
                                    <p className="text-primary text-sm font-medium">Lead Engineer</p>
                                </div>
                            </div>
                            {/* Member 4 */}
                            <div className="flex flex-col items-center text-center gap-3">
                                <div className="size-32 rounded-full overflow-hidden border-2 border-[#e7ebf3] dark:border-gray-700">
                                    <img alt="Portrait of Emily smiling in casual wear" className="w-full h-full object-cover" data-alt="Portrait of Emily smiling in casual wear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpBBSGREwWjGsWJdEYcrszXkHe1YuLNUUPRFNgcqQp4BcpnOPFBidl0ODcqEdESqBjdOiPFJVxOCAaptbykNpksh2KIJAg2MEMUgyV7FSR0KGOW2fSc3Ln947TbmY1vz8OKj7JUgPhBxlZthruiU5lHXjVcGhf4t2tPQOs6HFEpztG8f7XlYR-mmOePcGqmJTabKv8_4pST-OmsbdSIeyv5yvcOMOpMMdyIrl-l_ymlsDiS22yOzoXy69rvZDSjqlKhos2u00LzHI" />
                                </div>
                                <div>
                                    <h3 className="text-[#0d121b] dark:text-white font-bold text-lg">Emily Wilson</h3>
                                    <p className="text-primary text-sm font-medium">Design Lead</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* CTA Footer */}
                <section className="flex justify-center py-20 px-4 bg-primary text-white">
                    <div className="layout-content-container flex flex-col items-center text-center max-w-[720px] w-full gap-6">
                        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">Ready to land your dream job?</h2>
                        <p className="text-blue-100 text-lg max-w-[600px]">
                            Join over 1 million users who have successfully upgraded their careers with our professional resume builder.
                        </p>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white text-primary text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors shadow-lg">
                            <span className="truncate">Build My Resume</span>
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}
