import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa"

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1200px] mx-auto px-6 py-10 overflow-hidden">
      <div className=" flex justify-center items-center mt-20">
        <div className="bg-red-100  w-800 md:h-130 h-150 rounded-4xl">
            <h5 className=" flex  justify-center items-center text-5xl   mt-10  text-zinc-800 ">About Me</h5>
            <p className="mt-10 ml-30 font-bold text-2xl">Turning Ideas Into  <span className="text-red-600"> Digital Reality</span> </p>
            <p className="mt-5 md:ml-30 ml-10 md:text-xl text-lg">  Hello I'm <span className="text-red-600">Lense Gudisa </span>I'm web developer and designer.
            I'm studying software engineering in jimma university and i'm focusing in web development.<br/>
            I enjoy solving  problems ,learning new technologies and turning ideas in to life interactive <br/>digital experiance
            i love combining the worlds of logic and creative design to make <br/>eye-catching ,accessible and user-friendly website and application. 
            </p>
            <ul className="flex mt-10 gap-10 justify-center">
                <li>
                    <a href="#" className="text-xl hover:text-red-600"><FaTiktok/></a>
                </li>
                <li>
                    <a href="#"  className="text-xl hover:text-red-600"><FaInstagram/></a>
                </li>
                <li>
                    <a href="#"  className="text-xl hover:text-red-600"><FaLinkedin/></a>
                </li>
                 <li>
                    <a href="#"  className="text-xl hover:text-red-600"><FaGithub/></a>
                </li>
            </ul>


            <button className="w-full sm:w-auto flex  items-center  mt-10 md:ml-125 ml-60 justify-center gap-2 px-8 py-3 rounded-full border-2 border-red-600 dark:border-red-500 font-semibold text-red-600 dark:text-red-400 hover:bg-red-600 hover:text-white dark:hover:bg-red-500 dark:hover:text-white transition-all duration-300 transform hover:scale-105"> 
                Read More
           </button>
        </div>
      </div>
    </section>
  )
}

export default About