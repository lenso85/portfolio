import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-20 mt-10' >
        <div className='flex flex-wrap gap-x-12 gap-y-12 max-w-[1200px] mx-auto px-10'>
            <div className='flex-1 basis-[300px]'>
                <a href="#" className='text-3xl font-bold '>
                     Le<span className='text-red-600 uppercase'>N</span>se
                </a>
                <p className='text-zinc-600 mt-6 max-w-[350px] '> I am  web developer specializing in building modern,
                    responsive,and user-friendly websites.with a strong foundation in
                    HTML,CSS,JavaScript and popular frameworks like React and Node.js</p>

                <p className='text-zinc-800 mt-6'>
                2025 @copy: all right reserved
              </p>
            </div>
            <ul className='flex-1 '>
            <li>
                    <h5 className='text-zinc-800 text-2xl font-bold'>Links</h5>
            </li>
           <li className='mt-6'>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600 '>Home</a>
          </li>

          <li className='mt-4'>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>About</a>
          </li>

          <li className='mt-4'>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Skills</a>
          </li>
          <li className='mt-4'>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Services</a>
          </li>
          <li className='mt-4'>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Contact</a>
          </li>
        </ul>

        <ul className='w-[250px]'>
            <li>
                 <h5 className='text-zinc-800 text-2xl font-bold'>Contact Info</h5>
            </li>
            <li className='mt-6'>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>lensegudisa094@gmail.com</a>
            </li>
            <li className='mt-4'>
                <p className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>+251922978586</p>
            </li>
            <li className='mt-4'> 
                <p  className='font-semibold tracking-wider text-zinc-800 hover:text-red-600'>Jimma,Oromia</p>
            </li>
        </ul>
        <ul className='md:w-[180px] md:ml-0 ml-35'> 
            <li>
                <h5 className='text-zinc-800 text-2xl font-bold'>Social Links</h5>
            </li>
            <li className='mt-6'>
                <a href="#" className='text-2xl hover:text-red-600'>
                    <FaFacebook/>
                </a>
            </li>
            <li  className='mt-4'>
                <a href="#" className='text-2xl  hover:text-red-600'>
                    <FaInstagram/>
                </a>
            </li>
            <li  className='mt-4'>
                <a href="#"   className='text-2xl  hover:text-red-600'>
                    <FaLinkedin/>
                </a>
            </li>
            <li className='mt-4'>
                <a href="#"  className='text-2xl  hover:text-red-600'>
                    <FaGithub/>
                </a>
            </li>
        </ul>

        </div>
    </footer>
  )
}

export default Footer