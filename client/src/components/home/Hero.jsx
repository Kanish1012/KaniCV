import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <>
            {/* Page wrapper */}
            <div className="min-h-screen overflow-hidden">
                {/* Navbar */}
                <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
                    <a href="/">
                        <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-slate-800">
                        <a href="#" className="hover:text-green-600 transition">
                            Home
                        </a>
                        <a href="#features" className="hover:text-green-600 transition">
                            Features
                        </a>
                        <a href="#testimonials" className="hover:text-green-600 transition">
                            Testimonials
                        </a>
                        <a href="#contact" className="hover:text-green-600 transition">
                            Contact
                        </a>
                    </div>

                    <div className="hidden md:flex gap-2">
                        <Link
                            to="/app?state=register"
                            className="px-6 py-2 bg-green-500 hover:bg-green-600 transition rounded-full text-white"
                        >
                            Get started
                        </Link>
                        <Link
                            to="/app?state=login"
                            className="px-6 py-2 border hover:bg-slate-50 transition rounded-full text-slate-700"
                        >
                            Login
                        </Link>
                    </div>

                    <button
                        onClick={() => setMenuOpen(true)}
                        className="md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M4 5h16M4 12h16M4 19h16" />
                        </svg>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur flex flex-col items-center justify-center gap-8 text-lg transition-transform duration-300 md:hidden ${
                        menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <a href="#" className="text-white">Home</a>
                    <a href="#features" className="text-white">Features</a>
                    <a href="#testimonials" className="text-white">Testimonials</a>
                    <a href="#contact" className="text-white">Contact</a>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className="bg-green-600 text-white px-4 py-2 rounded-md"
                    >
                        Close
                    </button>
                </div>

                {/* Hero Section */}
                <section className="relative overflow-hidden flex flex-col items-center pt-24 px-4 md:px-16 lg:px-24 xl:px-40 text-black">
                    {/* Background blur */}
                    <div className="absolute top-24 left-1/4 -z-10 size-72 sm:size-96 bg-green-300 blur-[120px] opacity-30"></div>

                    {/* Social proof */}
                    <div className="flex items-center mb-6">
                        <div className="flex -space-x-3 pr-3">
                            {Array(5)
                                .fill(0)
                                .map((_, i) => (
                                    <img
                                        key={i}
                                        src={`https://randomuser.me/api/portraits/men/${70 + i}.jpg`}
                                        alt="user"
                                        className="size-8 rounded-full border-2 border-white"
                                    />
                                ))}
                        </div>

                        <div>
                            <div className="flex">
                                {Array(5)
                                    .fill(0)
                                    .map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="text-green-600"
                                        >
                                            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-3.5L6 21l1.5-7.5L2 9h7z" />
                                        </svg>
                                    ))}
                            </div>
                            <p className="text-sm text-gray-700">
                                Used by users worldwide
                            </p>
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center leading-tight">
                        Land your dream job with{" "}
                        <span className="bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                            AI-powered
                        </span>{" "}
                        resumes.
                    </h1>

                    {/* Subheading */}
                    <p className="max-w-md text-center text-base my-7">
                        Create, edit and download professional resumes with
                        AI-powered assistance.
                    </p>

                    {/* CTA */}
                    <div className="flex gap-4">
                        <Link
                            to="/app"
                            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 flex items-center transition"
                        >
                            Get started →
                        </Link>

                        <button className="border border-slate-400 hover:bg-green-50 transition rounded-full px-7 h-12 text-slate-700 flex items-center gap-2">
                            ▶ Try demo
                        </button>
                    </div>
                </section>
            </div>

            {/* Font */}
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
                `}
            </style>
        </>
    );
};

export default Hero;