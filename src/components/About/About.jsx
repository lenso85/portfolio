import { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="max-w-[1200px] mx-auto px-6 py-10 overflow-hidden">
      <div className="flex justify-center items-center mt-10">
        <div className="bg-red-100 dark:bg-zinc-900 w-full max-w-5xl rounded-4xl px-6 sm:px-12 py-10">
          <h5 className="flex justify-center items-center text-5xl text-zinc-800 dark:text-white">
            About Me
          </h5>
          <p className="mt-10 font-bold text-2xl text-zinc-900 dark:text-zinc-100">
            Turning Ideas Into <span className="text-red-600">Digital Reality</span>
          </p>
          <p className="mt-5 text-lg md:text-xl text-zinc-800 dark:text-zinc-200 leading-8">
            Hello I'm <span className="text-red-600">Lense Gudisa</span>. I'm a web
            developer and designer. I'm studying software engineering at Jimma
            University and I'm focusing on web development. I enjoy solving
            problems, learning new technologies, and turning ideas into
            interactive digital experiences. I love combining logic and creative
            design to make accessible and user-friendly websites and
            applications.
          </p>

          {expanded && (
            <p className="mt-4 text-lg md:text-xl text-zinc-800 dark:text-zinc-200 leading-8">
              Day to day I work with React and JavaScript on the interface,
              Node.js when a project needs a server or API, and Python for
              scripting and problem solving. I am looking for projects where I
              can keep building those skills and ship something people can use.
            </p>
          )}

          <ul className="flex mt-10 gap-10 justify-center text-zinc-800 dark:text-zinc-100">
            <li>
              <a href="#" aria-label="TikTok" className="text-xl hover:text-red-600">
                <FaTiktok />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Instagram" className="text-xl hover:text-red-600">
                <FaInstagram />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn" className="text-xl hover:text-red-600">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="#" aria-label="GitHub" className="text-xl hover:text-red-600">
                <FaGithub />
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            aria-expanded={expanded}
            className="mx-auto mt-10 flex items-center justify-center gap-2 px-8 py-3 rounded-full border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
