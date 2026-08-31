
import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "I design clean, modern, and user-friendly websites with a focus on responsive layouts, clear visuals, and smooth navigation. My goal is to create attractive and functional web interfaces that deliver a great experience on any device.",
    },
    {
      title: "Web Development",
      description:
        "I develop fast, responsive, and functional websites using modern web technologies. I focus on clean code, smooth performance, and user-friendly features that work seamlessly across all devices. My goal is to build reliable and interactive web solutions",
    },
    {
      title: "Mobile App Development",
      description:
        "I create responsive and high-performance mobile applications focused on a great user experience. I develop clean, efficient, and scalable apps that work smoothly across different devices. My goal is to turn ideas into reliable mobile solutions ",
    },
  ];

  return (
    <section
      id="services"
      className="max-w-[1200px] mx-auto px-6 py-16 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl mt-10 font-bold text-zinc-900">
          My Services
        </h2>

        <p className="mt-4 text-zinc-600 text-base sm:text-lg">
          Services I provide to create modern and responsive digital solutions.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-red-100 rounded-2xl p-6 sm:p-8 min-h-[450px] flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
          >
            <h5 className="text-2xl text-center text-red-600 font-bold">
              {service.title}
            </h5>

            <p className="mt-8 text-base sm:text-lg leading-8 text-zinc-800">
              {service.description}
            </p>

            <button
              className="mt-auto mx-auto px-8 py-3 rounded-full border-2 border-red-600
              font-semibold text-red-600
              hover:bg-red-600 hover:text-white
              transition-all duration-300 transform hover:scale-105"
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
