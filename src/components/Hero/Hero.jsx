import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/lense.png";
import cvFile from "../../assets/CV.pdf";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen max-w-[1200px] mx-auto flex items-center relative overflow-hidden"
        >
                <div className="container mx-auto px-14 py-12 relative z-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-30">

                    {/* LEFT - IMAGE */}
                    <div className="lg:w-2/5 w-full flex justify-center items-center mt-10 ">
                        <div className="relative group">

                 
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

                               
                                <img
                                    src={heroImage}
                                    alt="Lense"
                                    className="w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500"
                                />

                  
                                <div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>

                        
                                <div className="absolute inset-0 border-2 border-red-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500"></div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT - TEXT */}
                    <div className="lg:w-3/5 w-full flex flex-col md:items-start items-center text-left">

                        
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 text-gray-900 dark:text-white">
                            Hi, I'm{' '}
                            <span className="text-red-600">
                                Lense
                            </span>
                        </h1>

                
                        <h2 className="text-xl sm:text-2xl font-bold text-zinc-600 mb-4">
                            Full Stack Developer
                        </h2>

                        <p className="mb-6 leading-relaxed max-w-md lg:max-w-lg text-gray-700 dark:text-gray-300">
                            I am a passionate Full Stack Developer who loves
                            building modern, responsive, and user-friendly
                            web applications using modern technologies.
                        </p>

                       
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                            <a
                                href={cvFile}
                                download
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] transition-all duration-300 transform hover:scale-105"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line
                                        x1="12"
                                        y1="15"
                                        x2="12"
                                        y2="3"
                                    />
                                </svg>

                                Download CV
                            </a>

                           
                            <Link
                                to="/contact"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-red-600 dark:border-red-500 font-semibold text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2-2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>

                                Hire Me
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;