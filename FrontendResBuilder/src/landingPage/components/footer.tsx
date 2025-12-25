import React from "react";

export function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark border-t border-[#f0f2f4] dark:border-slate-800 pt-16 pb-8 font-display">
            <div className="px-4 md:px-10 max-w-[1280px] mx-auto">

                {/* Top Section: Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">

                    {/* Brand Column (Spans 2 columns on large screens) */}
                    <div className="col-span-2 lg:col-span-2 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[#111318] dark:text-white">
                            <div className="text-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-2xl">description</span>
                            </div>
                            <h2 className="text-lg font-bold">ResumeBuilder</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xs">
                            The easiest way to build a professional resume that passes the ATS robots and lands you more interviews.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#111318] dark:text-white">Product</h3>
                        <FooterLink href="#">Templates</FooterLink>
                        <FooterLink href="#">AI Writer</FooterLink>
                        <FooterLink href="#">Pricing</FooterLink>
                        <FooterLink href="#">Cover Letter</FooterLink>
                    </div>

                    {/* Resources Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#111318] dark:text-white">Resources</h3>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Resume Examples</FooterLink>
                        <FooterLink href="#">Career Advice</FooterLink>
                        <FooterLink href="#">Help Center</FooterLink>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#111318] dark:text-white">Legal</h3>
                        <FooterLink href="#">Terms of Service</FooterLink>
                        <FooterLink href="#">Privacy Policy</FooterLink>
                        <FooterLink href="#">Cookie Policy</FooterLink>
                    </div>
                </div>

                {/* Bottom Section: Copyright & Socials */}
                <div className="border-t border-[#f0f2f4] dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 dark:text-slate-500 text-sm">
                        © 2024 ResumeBuilder Inc. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        {/* Twitter Icon */}
                        <SocialLink href="#" label="Twitter">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </SocialLink>

                        {/* LinkedIn Icon */}
                        <SocialLink href="#" label="LinkedIn">
                            <path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path>
                        </SocialLink>

                        {/* GitHub Icon */}
                        <SocialLink href="#" label="GitHub">
                            <path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path>
                        </SocialLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helper component for standard footer links to reduce repetition
function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-slate-600 dark:text-slate-400 text-sm hover:text-primary transition-colors"
        >
            {children}
        </a>
    );
}

// Helper component for social media icons
function SocialLink({ href, label, children }: { href: string, label: string, children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="text-slate-400 hover:text-primary transition-colors"
        >
            <span className="sr-only">{label}</span>
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                {children}
            </svg>
        </a>
    );
}