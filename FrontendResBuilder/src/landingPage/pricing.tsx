
import { useState } from 'react';

export function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <main className="flex-1 flex flex-col items-center py-10 px-5 md:px-10 lg:px-20 bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display">
            {/* Hero Section */}
            <section className="max-w-[960px] w-full text-center mb-12">
                <div className="flex flex-col gap-4 items-center">
                    <h1 className="text-[#0d121b] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                        Simple pricing for your professional future
                    </h1>
                    <p className="text-[#4c669a] dark:text-gray-400 text-lg font-normal leading-normal max-w-2xl">
                        Build your dream career with the perfect plan. Start for free, upgrade when you need more power. Cancel anytime.
                    </p>
                    {/* Billing Cycle Toggle */}
                    <div className="mt-8 flex items-center justify-center gap-4 bg-white dark:bg-[#1a202c] p-1.5 rounded-full border border-[#cfd7e7] dark:border-gray-700 shadow-sm w-fit">
                        <button
                            onClick={() => setBillingCycle('monthly')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${billingCycle === 'monthly' ? 'bg-primary text-white shadow-md' : 'text-[#4c669a] dark:text-gray-400 hover:text-[#0d121b] dark:hover:text-white'}`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={() => setBillingCycle('yearly')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${billingCycle === 'yearly' ? 'bg-primary text-white shadow-md' : 'text-[#4c669a] dark:text-gray-400 hover:text-[#0d121b] dark:hover:text-white'}`}
                        >
                            Yearly
                            <span className="absolute -top-3 -right-6 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm animate-bounce">
                                -20%
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            {/* Pricing Cards */}
            <section className="max-w-[1200px] w-full mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {/* Free Plan */}
                    <div className="group relative flex flex-col gap-6 rounded-2xl border border-solid border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#0d121b] dark:text-white text-xl font-bold leading-tight">Free</h3>
                            <p className="text-[#4c669a] dark:text-gray-400 text-sm">For trying it out</p>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-[#0d121b] dark:text-white text-5xl font-black tracking-tighter">$0</span>
                                <span className="text-[#4c669a] dark:text-gray-400 text-base font-medium">/mo</span>
                            </div>
                        </div>
                        <button className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#e7ebf3] hover:bg-[#dbe0ea] dark:bg-gray-700 dark:hover:bg-gray-600 text-[#0d121b] dark:text-white text-sm font-bold tracking-wide transition-colors">
                            Get Started
                        </button>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>1 Resume</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Basic Templates</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>TXT Download</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-gray-400 items-start">
                                <span className="material-symbols-outlined text-gray-300 text-[20px]">cancel</span>
                                <span className="line-through">AI Assistant</span>
                            </div>
                        </div>
                    </div>
                    {/* Pro Plan (Recommended) */}
                    <div className="group relative flex flex-col gap-6 rounded-2xl border-2 border-solid border-primary bg-white dark:bg-[#1a202c] p-8 shadow-2xl hover:-translate-y-1 transition-all duration-300 transform scale-105 z-10">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                            Most Popular
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary text-xl font-bold leading-tight">Pro</h3>
                            <p className="text-[#4c669a] dark:text-gray-400 text-sm">Best for job seekers</p>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-[#0d121b] dark:text-white text-5xl font-black tracking-tighter">${billingCycle === 'monthly' ? '15' : '12'}</span>
                                <span className="text-[#4c669a] dark:text-gray-400 text-base font-medium">/mo</span>
                            </div>
                        </div>
                        <button className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-primary hover:bg-primary-dark text-white text-sm font-bold tracking-wide transition-colors shadow-lg shadow-primary/30">
                            Get Pro
                        </button>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Unlimited Resumes</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>AI Writing Assistant</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>PDF & Word Export</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                                <span>Premium Templates</span>
                            </div>
                        </div>
                    </div>
                    {/* Executive Plan */}
                    <div className="group relative flex flex-col gap-6 rounded-2xl border border-solid border-[#cfd7e7] dark:border-gray-700 bg-white dark:bg-[#1a202c] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[#0d121b] dark:text-white text-xl font-bold leading-tight">Executive</h3>
                            <p className="text-[#4c669a] dark:text-gray-400 text-sm">For serious career growth</p>
                            <div className="mt-2 flex items-baseline gap-1">
                                <span className="text-[#0d121b] dark:text-white text-5xl font-black tracking-tighter">${billingCycle === 'monthly' ? '35' : '28'}</span>
                                <span className="text-[#4c669a] dark:text-gray-400 text-base font-medium">/mo</span>
                            </div>
                        </div>
                        <button className="w-full cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-[#e7ebf3] hover:bg-[#dbe0ea] dark:bg-gray-700 dark:hover:bg-gray-600 text-[#0d121b] dark:text-white text-sm font-bold tracking-wide transition-colors">
                            Get Executive
                        </button>
                        <div className="flex flex-col gap-4 mt-2">
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Everything in Pro</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>LinkedIn Optimization</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Cover Letter Generator</span>
                            </div>
                            <div className="text-sm font-medium flex gap-3 text-[#0d121b] dark:text-gray-200 items-start">
                                <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                                <span>Priority Support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Trust Indicators */}
            <section className="w-full max-w-[960px] mb-20">
                <p className="text-center text-sm font-medium text-[#4c669a] uppercase tracking-widest mb-8">Trusted by professionals at</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-slate-200">
                        <span className="material-symbols-outlined">rocket_launch</span> TechSpace
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-slate-200">
                        <span className="material-symbols-outlined">diamond</span> GemCorp
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-slate-200">
                        <span className="material-symbols-outlined">stadia_controller</span> PlaySoft
                    </div>
                    <div className="flex items-center gap-2 font-bold text-xl text-slate-800 dark:text-slate-200">
                        <span className="material-symbols-outlined">forest</span> GreenLeaf
                    </div>
                </div>
            </section>
            {/* FAQ Section */}
            <section className="max-w-[800px] w-full bg-white dark:bg-[#1a202c] rounded-2xl p-8 md:p-12 border border-[#cfd7e7] dark:border-gray-700 shadow-sm">
                <div className="text-center mb-10">
                    <h2 className="text-[#0d121b] dark:text-white text-3xl font-bold leading-tight tracking-tight">Frequently Asked Questions</h2>
                    <p className="text-[#4c669a] mt-2">Everything you need to know about the product and billing.</p>
                </div>
                <div className="flex flex-col gap-4">
                    {/* FAQ Item 1 */}
                    <div className="border-b border-[#e7ebf3] dark:border-gray-700 pb-4">
                        <details className="group">
                            <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0d121b] dark:text-white text-lg marker:content-none hover:text-primary transition-colors">
                                Can I cancel my subscription anytime?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-3 text-[#4c669a] dark:text-gray-400 leading-relaxed">
                                Yes, absolutely. You can cancel your subscription at any time from your account settings. You will continue to have access to the pro features until the end of your current billing period.
                            </p>
                        </details>
                    </div>
                    {/* FAQ Item 2 */}
                    <div className="border-b border-[#e7ebf3] dark:border-gray-700 pb-4 pt-2">
                        <details className="group">
                            <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0d121b] dark:text-white text-lg marker:content-none hover:text-primary transition-colors">
                                Do you offer refunds?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-3 text-[#4c669a] dark:text-gray-400 leading-relaxed">
                                We offer a 14-day money-back guarantee. If you're not satisfied with our service within the first two weeks, simply contact our support team and we'll process a full refund, no questions asked.
                            </p>
                        </details>
                    </div>
                    {/* FAQ Item 3 */}
                    <div className="border-b border-[#e7ebf3] dark:border-gray-700 pb-4 pt-2">
                        <details className="group">
                            <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0d121b] dark:text-white text-lg marker:content-none hover:text-primary transition-colors">
                                Is my data secure?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-3 text-[#4c669a] dark:text-gray-400 leading-relaxed">
                                Security is our top priority. We use industry-standard encryption to protect your personal information and resume data. We never share your data with third parties without your explicit consent.
                            </p>
                        </details>
                    </div>
                    {/* FAQ Item 4 */}
                    <div className="pt-2">
                        <details className="group">
                            <summary className="flex cursor-pointer items-center justify-between font-bold text-[#0d121b] dark:text-white text-lg marker:content-none hover:text-primary transition-colors">
                                Can I switch plans later?
                                <span className="material-symbols-outlined transition group-open:rotate-180">expand_more</span>
                            </summary>
                            <p className="mt-3 text-[#4c669a] dark:text-gray-400 leading-relaxed">
                                Yes, you can upgrade or downgrade your plan at any time. When upgrading, the prorated amount will be charged immediately. Downgrades take effect at the start of the next billing cycle.
                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </main>
    );
}
