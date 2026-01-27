import React from "react";

const Footer = () => {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>

            <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-r from white via-green-200/60 to white mt-40">
                <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="#">
                        <img src="/logo.svg" alt="logo" />
                    </a>
                    <div>
                        <p className="text-slate-800 font-semibold">Product</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Support
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Affiliate
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-100 font-semibold">
                            Resources
                        </p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Community
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Careers
                                    <span className="text-xs text-white bg-green-600 rounded-md ml-2 px-2 py-1">
                                        We’re hiring!
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-slate-800 font-semibold">Legal</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-green-600 transition"
                                >
                                    Terms
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">
                        Supporting every career journey, from first resume to
                        final offer.
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                        <a
                            href="https://github.com/Kanish1012"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-github size-5 hover:text-green-500"
                                aria-hidden="true"
                            >
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61
        c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77
        A5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48
        a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1
        A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78
        c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                                />
                            </svg>
                        </a>

                        <a
                            href="linkedin.com/in/kanish1012/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-linkedin size-5 hover:text-green-500"
                                aria-hidden="true"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                <rect width="4" height="12" x="2" y="9"></rect>
                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>

                        <a
                            href="https://www.instagram.com/kanishv_10/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-instagram size-5 hover:text-green-500"
                                aria-hidden="true"
                            >
                                <rect
                                    width="20"
                                    height="20"
                                    x="2"
                                    y="2"
                                    rx="5"
                                    ry="5"
                                ></rect>
                                <path d="M16 11.37a4 4 0 1 1-7.87 1.26"></path>
                                <line
                                    x1="17.5"
                                    x2="17.51"
                                    y1="6.5"
                                    y2="6.5"
                                ></line>
                            </svg>
                        </a>
                    </div>
                    <p className="mt-3 text-center">
                        © {new Date().getFullYear()}{" "}
                        <a href="https://prebuiltui.com">
                            KaniCV Resume Builder
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
