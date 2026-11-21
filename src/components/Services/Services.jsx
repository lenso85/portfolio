import React, { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Web Design",
    description:
      "I design clean, modern, and user-friendly websites with a focus on responsive layouts, clear visuals, and smooth navigation. My goal is to create attractive and functional web interfaces that deliver a great experience on any device.",
    details:
      "Layouts are built in React and styled so they stay readable on phones and desktops. I plan the page structure, spacing, and calls to action before writing the interface.",
  },
  {
    title: "Web Development",
    description:
      "I develop fast, responsive, and functional websites using modern web technologies. I focus on clean code, smooth performance, and user-friendly features that work seamlessly across all devices. My goal is to build reliable and interactive web solutions",
    details:
      "The front end is JavaScript and React. Server work uses Node.js for APIs, forms, and data. Python covers scripts and smaller backend tasks when that fits the project.",
  },
  {
    title: "Mobile App Development",
    description:
      "I create responsive and high-performance mobile applications focused on a great user experience. I develop clean, efficient, and scalable apps that work smoothly across different devices. My goal is to turn ideas into reliable mobile solutions ",
    details:
      "I start from a responsive React interface, then shape navigation and touch targets so the same product works well on a phone screen.",
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto px-6 py-16 overflow-hidden"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl mt-10 font-bold text-zinc-900 dark:text-white">
          My Services
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300 text-base sm:text-lg">
          Services I provide to create modern and responsive digital solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const open = openIndex === index;

          return (
            <div
              key={service.title}
              className="bg-red-100 dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 min-h-[450px] flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
            >
              <h5 className="text-2xl text-center text-red-600 font-bold">
                {service.title}
              </h5>

              <p className="mt-8 text-base sm:text-lg leading-8 text-zinc-800 dark:text-zinc-200">
                {service.description}
              </p>

              {open && (
                <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
                  {service.details}
                </p>
              )}

              <div className="mt-auto pt-8 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  className="px-8 py-3 rounded-full border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
                  aria-expanded={open}
                >
                  {open ? "Show Less" : "Read More"}
                </button>

                {open && (
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 underline hover:text-red-600"
                  >
                    Ask about this service
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
