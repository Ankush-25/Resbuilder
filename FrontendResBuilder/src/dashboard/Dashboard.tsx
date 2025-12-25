import { Link } from 'react-router-dom';

export function Dashboard() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-[#111318] dark:text-white font-display">
            {/* Sidebar */}
            <aside className="w-64 flex-shrink-0 flex flex-col bg-white dark:bg-[#1a202c] border-r border-[#dbdfe6] dark:border-gray-800 transition-colors duration-200">
                <div className="h-full flex flex-col justify-between p-4">
                    <div className="flex flex-col gap-6">
                        {/* Brand */}
                        <div className="flex items-center gap-3 px-2">
                            <div className="bg-primary/10 flex items-center justify-center rounded-lg size-10 text-primary">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>description</span>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-[#111318] dark:text-white text-lg font-bold leading-tight">ResumeGen</h1>
                                <p className="text-[#616f89] dark:text-gray-400 text-xs font-normal">Pro Plan</p>
                            </div>
                        </div>
                        {/* Navigation */}
                        <nav className="flex flex-col gap-2">
                            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary group" to="#">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>dashboard</span>
                                <p className="text-sm font-semibold leading-normal">Dashboard</p>
                            </Link>
                            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="#">
                                <span className="material-symbols-outlined">description</span>
                                <p className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-200">My Resumes</p>
                            </Link>
                            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="#">
                                <span className="material-symbols-outlined">style</span>
                                <p className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-200">Templates</p>
                            </Link>
                            <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="#">
                                <span className="material-symbols-outlined">note_add</span>
                                <p className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-200">Cover Letters</p>
                            </Link>
                        </nav>
                    </div>
                    {/* Bottom Actions */}
                    <div className="flex flex-col gap-2 mt-auto">
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="#">
                            <span className="material-symbols-outlined">settings</span>
                            <p className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-200">Settings</p>
                        </Link>
                        <Link className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#616f89] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" to="#">
                            <span className="material-symbols-outlined">help</span>
                            <p className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-200">Help Center</p>
                        </Link>
                        {/* User Profile Snippet */}
                        <div className="mt-4 pt-4 border-t border-[#dbdfe6] dark:border-gray-800 flex items-center gap-3">
                            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border border-gray-200 dark:border-gray-700" data-alt="User profile picture showing a smiling professional" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlxqTpJ-sWMhCn8IFSRLjNkhEILv3vtTevSPXHhABtrdgRR6sQuWEUlCAfL1jr58nghWacu3iH0WY45dv2tBLiQJozzAURk9FeGRA_H_oBEz9mCvynDZjvRYCEojY7hJtXq_SWuw7ml2ZBdPFp-ho65hSk2P_1Pm7X7uSJT2mB2ljMiU96dWY0OT6JGgCC7w1gVQJq24zbxuoiz02TtkWU9ysSmpa41Vdhe2rjLHPy3PaxbJa4WAkJe5-P72P0EVm1MlPeqt-CUlQ")' }}>
                            </div>
                            <div className="flex flex-col overflow-hidden">
                                <p className="text-sm font-semibold text-[#111318] dark:text-white truncate">Alex Morgan</p>
                                <p className="text-xs text-[#616f89] dark:text-gray-400 truncate">alex@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-hidden relative">
                {/* Top Navigation */}
                <header className="flex items-center justify-between whitespace-nowrap border-b border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] px-8 py-3 sticky top-0 z-10">
                    <div className="flex items-center gap-4 w-1/3">
                        <label className="flex flex-col w-full max-w-md h-10">
                            <div className="flex w-full flex-1 items-stretch rounded-lg h-full relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#616f89]">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111318] dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-[#f0f2f4] dark:bg-gray-800 h-full placeholder:text-[#616f89] px-4 pl-10 text-sm font-normal leading-normal transition-all" placeholder="Search templates, resumes..." />
                            </div>
                        </label>
                    </div>
                    <div className="flex flex-1 justify-end gap-6 items-center">
                        <button className="flex items-center justify-center rounded-lg size-10 bg-white dark:bg-gray-800 hover:bg-[#f0f2f4] dark:hover:bg-gray-700 text-[#111318] dark:text-gray-200 transition-colors relative">
                            <span className="material-symbols-outlined">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                        </button>
                        <button className="hidden md:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-9 px-4 bg-primary text-white text-sm font-medium leading-normal hover:bg-blue-700 transition-colors shadow-sm shadow-blue-500/20">
                            <span className="truncate">Upgrade to Pro</span>
                        </button>
                    </div>
                </header>
                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
                    {/* Welcome Section */}
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">Welcome back, Alex</h2>
                            <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal">You're on track! Check your latest stats below.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-[#dbdfe6] dark:border-gray-700 text-[#111318] dark:text-white text-sm font-bold leading-normal hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                                <span className="material-symbols-outlined mr-2 text-[20px]">cloud_upload</span>
                                <span className="truncate">Import LinkedIn</span>
                            </button>
                        </div>
                    </div>
                    {/* Stats Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">donut_large</span>
                                </div>
                                <span className="text-[#07883b] text-sm font-medium leading-normal bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+5%</span>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal">Resume Completeness</p>
                                <p className="text-[#111318] dark:text-white tracking-light text-2xl font-bold leading-tight">85%</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
                                    <span className="material-symbols-outlined">visibility</span>
                                </div>
                                <span className="text-[#07883b] text-sm font-medium leading-normal bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+12%</span>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal">Total Views</p>
                                <p className="text-[#111318] dark:text-white tracking-light text-2xl font-bold leading-tight">124</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 rounded-xl p-5 border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] shadow-sm">
                            <div className="flex justify-between items-start">
                                <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600">
                                    <span className="material-symbols-outlined">send</span>
                                </div>
                                <span className="text-[#07883b] text-sm font-medium leading-normal bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">+2%</span>
                            </div>
                            <div className="mt-2">
                                <p className="text-[#616f89] dark:text-gray-400 text-sm font-medium leading-normal">Applications Sent</p>
                                <p className="text-[#111318] dark:text-white tracking-light text-2xl font-bold leading-tight">12</p>
                            </div>
                        </div>
                    </div>
                    {/* Create New Hero */}
                    <div className="@container">
                        <div className="flex flex-col items-stretch justify-start rounded-xl @xl:flex-row @xl:items-center bg-white dark:bg-[#1a202c] border border-[#dbdfe6] dark:border-gray-800 shadow-sm overflow-hidden group hover:border-primary/50 transition-colors">
                            <div className="w-full @xl:w-1/3 h-48 @xl:h-auto min-h-[200px] bg-center bg-no-repeat bg-cover relative" data-alt="Abstract blue and white geometric pattern representing document creation" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAx82PleI6xFq9wcE4d55QRaJC9h7t6q4Bmq1IF8vxVP6n380XnxNQn5HDq__IR1gpLoxx-8cbPdeT-UTmo1RMvJ4glmOD8X0FC0g6UPLgVHAZ_ZuZ3_75qsGLpO6seqNnkGo5Is8m9uNwTvmm83XP-K81-YA-nQ6C93vnPQzb_7Ql2w5PfRTkVRMSHLS5KNYTn49DJYukYVxApgQ6H2fhOiTifZdqXzLShMpkXNygUr52Fg7kn4Y5TNau2a6bq9Sh-AtHjvb3oU4M")' }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent @xl:bg-gradient-to-r"></div>
                            </div>
                            <div className="flex w-full grow flex-col items-start justify-center gap-4 p-6 @xl:p-8">
                                <div>
                                    <h3 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em] mb-2">Create New Resume</h3>
                                    <p className="text-[#616f89] dark:text-gray-400 text-base font-normal leading-normal max-w-lg">Start from scratch with our AI-powered builder or upload an existing PDF to let our system optimize it for ATS.</p>
                                </div>
                                <div className="flex flex-wrap gap-3 w-full">
                                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                                        <span className="material-symbols-outlined mr-2 text-[20px]">add</span>
                                        <span>Create Resume</span>
                                    </button>
                                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-[#f0f2f4] dark:bg-gray-800 text-[#111318] dark:text-white text-sm font-bold leading-normal hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                                        <span className="material-symbols-outlined mr-2 text-[20px]">upload_file</span>
                                        <span>Upload PDF</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Recent Resumes & Trending Templates Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                        {/* Recent Resumes (Span 2) */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#111318] dark:text-white text-lg font-bold">Recent Resumes</h3>
                                <Link className="text-primary text-sm font-semibold hover:underline" to="#">View All</Link>
                            </div>
                            {/* Resume List Item 1 */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] hover:shadow-md transition-shadow group">
                                <div className="w-full sm:w-24 h-32 sm:h-24 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-top border border-gray-200 dark:border-gray-700" data-alt="Miniature preview of a resume document layout" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8IwY2Ejv15dux-hww0XT2EzaIIjcMEDRmUW-FaRs3zTM-p-FIc1FNKxABLkcVWKZwyZPrC7-MrlrlJeVnGQl9ko2NMBG1vsUvd17F-s38oyRKW0tpRWR__pyUFl2ApKzMhOQHOMTVeaWH7AV7_M9ItbnZ_pM5irEw9DCh0ErcPVEZL2hwUE_afYAEsCbtPHYnl0qGu19nKI-raYDopHhsEzdhPbDqX3XAb4GWwtM2SAxvpoNC321TMODY_XnoZFpFDo8xFfBhVx4')" }}>
                                </div>
                                <div className="flex-1 w-full flex flex-col justify-between h-full py-1">
                                    <div>
                                        <h4 className="text-[#111318] dark:text-white font-bold text-base mb-1">Senior Product Designer</h4>
                                        <p className="text-[#616f89] dark:text-gray-400 text-xs">Last edited 2 hours ago</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2 py-1 rounded bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">ATS Friendly</span>
                                    </div>
                                </div>
                                <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                    <button className="flex-1 sm:flex-none flex items-center justify-center size-9 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors" title="Edit">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button className="flex-1 sm:flex-none flex items-center justify-center size-9 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors" title="Download">
                                        <span className="material-symbols-outlined text-[20px]">download</span>
                                    </button>
                                </div>
                            </div>
                            {/* Resume List Item 2 */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c] hover:shadow-md transition-shadow group">
                                <div className="w-full sm:w-24 h-32 sm:h-24 rounded-lg bg-gray-100 dark:bg-gray-800 bg-cover bg-top border border-gray-200 dark:border-gray-700" data-alt="Miniature preview of a resume document layout" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA1FMK_Sg1GJ4AjQMd34mjtJAqoufO7l9rOFh7RSoH_m7cpE0SFsfeeOv_0l651bHZHV0F_kZgQy4yd5u4NMwnUSkrr4UXjXCTn-b5mshtUMF-saBR5GTubhSE10Tj2VJesEZyU-RPT0I3z_Yk53hczkIDdAG3aWASfB26LMWMDXa3QZhI1xHkB6fysVRKZc3nvsXIz9SNRMgWhiGzbAJovyt2Tf84KfyZePE_RMChcST3mUjB7-kUL8jhAZ2oPfIbrEqSI54Rih2w')" }}>
                                </div>
                                <div className="flex-1 w-full flex flex-col justify-between h-full py-1">
                                    <div>
                                        <h4 className="text-[#111318] dark:text-white font-bold text-base mb-1">Frontend Developer - 2023</h4>
                                        <p className="text-[#616f89] dark:text-gray-400 text-xs">Last edited 3 days ago</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">Creative</span>
                                    </div>
                                </div>
                                <div className="flex sm:flex-col gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                                    <button className="flex-1 sm:flex-none flex items-center justify-center size-9 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors" title="Edit">
                                        <span className="material-symbols-outlined text-[20px]">edit</span>
                                    </button>
                                    <button className="flex-1 sm:flex-none flex items-center justify-center size-9 rounded-lg text-gray-500 hover:text-primary hover:bg-primary/10 transition-colors" title="Download">
                                        <span className="material-symbols-outlined text-[20px]">download</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Recommended Templates (Span 1) */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h3 className="text-[#111318] dark:text-white text-lg font-bold">Trending Templates</h3>
                            </div>
                            <div className="flex flex-col gap-4 h-full">
                                {/* Template Card 1 */}
                                <div className="relative group rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c]">
                                    <div className="h-40 bg-gray-100 dark:bg-gray-800 bg-cover bg-top transition-transform duration-500 group-hover:scale-105" data-alt="Minimalist Resume Template Preview" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAkvy-FxWJtO_tiINpYFPV1JMxrx0w11Gkdnh5KG-jy_BycdHz2g-BMjLU28bVBWtythE9UJtdrTaqSNEHFk8qEkMPT77hvsXBnGE2jVYfEwihdNa3TGXN6Q1t9v3jeeY6GanGc8sjAnomWOHKkI7IFbGooWGj-pI_8mAHRVLkNGcaGH2r46dlJRZ5pCr1_5WbQkoSNjr0OKWS0RWpU5_tPfQypprIrVCHCP6RB7NY73GyXd-XE8CMnsQI-1rfbyaPC0LUTiOwm-3Q')" }}>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-sm text-[#111318] dark:text-white">Minimalist Pro</h4>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                                                <span className="text-xs font-medium text-[#111318] dark:text-gray-300">4.9</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-[#616f89] dark:text-gray-400 mb-3">Best for corporate roles</p>
                                        <button className="w-full py-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-700 text-[#111318] dark:text-white text-xs font-bold hover:bg-primary hover:text-white transition-colors">Use Template</button>
                                    </div>
                                </div>
                                {/* Template Card 2 */}
                                <div className="relative group rounded-xl overflow-hidden border border-[#dbdfe6] dark:border-gray-800 bg-white dark:bg-[#1a202c]">
                                    <div className="h-40 bg-gray-100 dark:bg-gray-800 bg-cover bg-top transition-transform duration-500 group-hover:scale-105" data-alt="Creative Resume Template Preview" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrxGDedFqtnGpgbTPzeROMEZTG_VSSg18v09DooN0cpjFsOlo5Ri6fWOTHrfDlEZK02DuDNnF24jByzQG2VwQwvSisRDD0HvsNMbRmju4Yqh06rEhqOFWjE-AZ797MI4H7Glbw6BdDvOtwlow_34dreP3ew9iX5GsrHA-yUMlKqXCrZZiuyJS4puGhrQgzoty29TBwM2PpyNs_uh4iGzogFDE5c9rgbJPO3MZHJdigXMd9HiYPN2ZoiA0WD68y8oT4unbd_sWnjI4')" }}>
                                    </div>
                                    <div className="p-3">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-bold text-sm text-[#111318] dark:text-white">Creative Bold</h4>
                                            <div className="flex items-center gap-1 text-yellow-500">
                                                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>star</span>
                                                <span className="text-xs font-medium text-[#111318] dark:text-gray-300">4.7</span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-[#616f89] dark:text-gray-400 mb-3">Best for design roles</p>
                                        <button className="w-full py-2 rounded-lg bg-[#f0f2f4] dark:bg-gray-700 text-[#111318] dark:text-white text-xs font-bold hover:bg-primary hover:text-white transition-colors">Use Template</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
