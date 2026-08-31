
import React from "react";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    };

    return (
        <section
            id="contact"
            className="py-20 relative overflow-hidden bg-white "
        >
            <div className="container mx-auto px-6 relative z-10">

               
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 ">
                        Get in Touch
                    </h2>

                    <p className="text-gray-600  mt-2">
                        We'd love to hear from you
                    </p>
                </div>

            
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl relative">

                 
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-72 h-72 rounded-full bg-red-400/40  blur-2xl scale-110" />
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="relative flex flex-col gap-5 bg-white/80  p-8 sm:p-10 rounded-3xl border border-gray-200  backdrop-blur-sm w-full shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >

                            {/* Name */}
                            <input
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200  outline-none bg-white  text-gray-800  placeholder-gray-400 focus:border-red-500 transition-all"
                            />

                            {/* Email */}
                            <input
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200  outline-none bg-white  text-gray-800  placeholder-gray-400 focus:border-red-500 transition-all"
                            />

                            {/* Message */}
                            <textarea
                                rows="5"
                                placeholder="Your Message"
                                required
                                className="w-full px-5 py-4 rounded-xl border border-gray-200 outline-none resize-none bg-white  text-gray-800  placeholder-gray-400 focus:border-red-500 transition-all"
                            />

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium text-base transition-colors duration-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M22 2L11 13" />
                                    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                                </svg>

                                Send Message
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
