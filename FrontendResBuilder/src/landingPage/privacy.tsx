
export function PrivacyPolicy() {
    return (
        <main className="min-w-0 bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <main className="min-w-0">
                    <div className="mb-10" id="introduction">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4">
                            <span className="material-symbols-outlined text-[16px]">verified_user</span>
                            Effective Date: October 24, 2023
                        </span>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-3xl">
                            At ResumeGen, we believe your professional journey belongs to you. This policy outlines how we protect and manage the data you trust us with while building your future.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <section className="lg:col-span-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm flex flex-col justify-between" id="highlights">
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Key Privacy Highlights</h2>
                                <p className="text-slate-500 dark:text-slate-400 mb-6">A quick summary of our practices before you dive into the details.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 text-green-600 dark:text-green-400">
                                            <span className="material-symbols-outlined">visibility_off</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Private by Default</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Your resume data is private and only visible to you unless you choose to share a public link.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 text-blue-600 dark:text-blue-400">
                                            <span className="material-symbols-outlined">lock</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Bank-Level Encryption</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">All data is encrypted at rest (AES-256) and in transit (TLS 1.3).</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0 text-purple-600 dark:text-purple-400">
                                            <span className="material-symbols-outlined">block</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">No Data Selling</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">We do not sell your personal information or resume contents to third-party recruiters or advertisers.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0 text-orange-600 dark:text-orange-400">
                                            <span className="material-symbols-outlined">delete</span>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Right to Delete</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">You can permanently delete your account and all associated data at any time with one click.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="bg-primary rounded-xl p-8 text-white relative overflow-hidden group shadow-sm flex flex-col justify-center" id="contact">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all"></div>
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-24 -mb-24 blur-2xl"></div>
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-2">Questions about your privacy?</h2>
                                <p className="text-white/80 max-w-lg mb-6 text-sm">Our Data Protection Officer is available to address any concerns or requests regarding your personal information.</p>
                                <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                                    <button className="bg-white text-primary hover:bg-slate-100 font-bold px-4 py-2 rounded-lg transition-colors shadow-lg text-sm w-full sm:w-auto">
                                        Email DPO
                                    </button>
                                    <button className="bg-primary border border-white/30 hover:bg-white/10 text-white font-bold px-4 py-2 rounded-lg transition-colors text-sm w-full sm:w-auto">
                                        Visit Help Center
                                    </button>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm" id="collection">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">1</span>
                                Information We Collect
                            </h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
                                <p>To provide our resume building services, we collect information that you voluntarily provide to us. This includes:</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong>Account Information:</strong> Name, email address, and password hash when you register.</li>
                                    <li><strong>Professional Profile Data:</strong> Employment history, education, skills, certifications, and other content you add to your resumes.</li>
                                    <li><strong>Usage Data:</strong> Information about how you interact with our builder, such as template choices and session duration, to help us improve the UX.</li>
                                </ul>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm md:col-span-2 lg:col-span-2" id="usage">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">2</span>
                                How We Use Your Data
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">We process your data for specific purposes based on legitimate business interests and contract fulfillment.</p>
                            <div className="overflow-hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 w-1/3">Purpose</th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Service Delivery</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">To generate, save, and export your resume documents in various formats (PDF, DOCX).</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Product Improvement</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">To analyze aggregated, anonymized usage patterns to identify popular templates and improve builder performance.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Customer Support</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">To resolve technical issues you report and assist with account management.</td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">Communication</td>
                                            <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">To send transactional emails (password resets) and, with your consent, product updates.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm" id="security">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">3</span>
                                Security & Data Storage
                            </h2>
                            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400 text-sm">
                                <p>
                                    We implement industry-standard security measures to protect your data. Your resume data is stored on secure AWS servers located in the United States.
                                    We use limited-access protocols and regular security audits to ensure the integrity of our systems.
                                </p>
                                <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-primary">
                                    <p className="text-sm">
                                        <strong>Note on Public Links:</strong> If you choose to use our "Share Link" feature, a publicly accessible URL for your resume will be generated.
                                        You are responsible for whom you share this link with. You can disable this link at any time in your dashboard.
                                    </p>
                                </div>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8 shadow-sm lg:col-span-2" id="rights">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-sm">4</span>
                                Your Rights (GDPR & CCPA)
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm">Regardless of your location, we extend the following rights to all users:</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary">download</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Right to Portability</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Download all your raw data in a machine-readable format (JSON/XML).</p>
                                </div>
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary">edit</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Right to Rectification</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Easily update or correct any inaccuracies in your profile directly through the builder.</p>
                                </div>
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary">cancel</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Right to Erasure</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Request complete deletion of your account and data. We do not retain data after deletion.</p>
                                </div>
                                <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-lg hover:border-primary/50 transition-colors cursor-default">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="material-symbols-outlined text-primary">gavel</span>
                                        <h3 className="font-bold text-slate-900 dark:text-white">Right to Object</h3>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">Opt-out of any non-essential data processing or marketing communications.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </main>
    );
}
