import { useNavigate } from "react-router-dom";
import { menus } from "./navConfig";

export function NavBar() {
    const navigate = useNavigate();
    const menuArray = Object.entries(menus);

    const handleOnClick = (path: string) => {
        navigate(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full font-display border-b border-solid border-[#f0f2f4] dark:border-slate-800 bg-white/80 dark:bg-background-dark/90 backdrop-blur-md">
            <div className="px-4 md:px-10 py-3 flex items-center justify-between max-w-[1280px] mx-auto">

                {/* Logo Section */}
                <div
                    className="flex items-center gap-4 text-[#111318] dark:text-white cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <div className="text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl select-none">description</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
                        ResumeBuilder
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex flex-1 justify-end gap-8 items-center">
                    <nav className="flex items-center gap-9">
                        {menuArray?.map(([menu, path], index) => (
                            <button
                                key={index}
                                onClick={() => handleOnClick(path)}
                                className="text-sm font-medium leading-normal text-[#111318] dark:text-white hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                            >
                                {menu}
                            </button>
                        ))}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => navigate('/login')}
                            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent hover:bg-slate-100 dark:hover:bg-primary text-[#111318] dark:text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors"
                        >
                            <span className="truncate">LogIn</span>
                        </button>
                        <button
                            onClick={() => navigate('/signup')}
                            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-blue-800 text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors shadow-sm"
                        >
                            <span className="truncate">SignUp</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden flex items-center justify-center text-[#111318] dark:text-white">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}