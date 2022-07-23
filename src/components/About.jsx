import React from 'react';
import { FaReact } from 'react-icons/fa';
// import profileImg from '../assets/images/md_musa.png';
import { IoLogoJavascript } from 'react-icons/io';

import { SiRedux, SiTailwindcss } from 'react-icons/si';
import { SiReacttable } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3Full } from 'react-icons/di';

function About() {
  return (
    <section className="py-10 px-2 md:px-32 bg-white mt-16 border-t-4 border-gray-100">
      <div className="m-auto">
        <img
          className="h-[300px] w-[300px] m-auto rounded-full object-cover"
          src="https://t4.ftcdn.net/jpg/03/07/90/09/240_F_307900949_3TSmRdS2q7nZQ3YuwjdqcnLBQNEZ2GSv.jpg"
          alt=""
        />
      </div>
      <div className="border-2 mx-auto my-8 border-purple-100 rounded-full w-1/4 h-1"></div>

      <h1 className="text-center font-semibold text-3xl ">Skills</h1>
      <p className="text-center font-normal text-md text-gray-600">DEVELOPMENT ARSENAL</p>

      <div className="grid md:grid-cols-3 px-5">
        <div className="border-r px-10">
          <h3 className="font-semibold text-xl my-4">Front-End Technologies</h3>

          <ul className="space-y-3">
            <li className="technology bg-yellow-100 text-yellow-600 rounded-full">
              <IoLogoJavascript /> <span>Javascript</span>
            </li>

            <li className="technology bg-cyan-100 text-cyan-600 rounded-full">
              <FaReact /> <span>React</span>
            </li>

            <li className="technology bg-purple-100 text-purple-600 rounded-full">
              <SiRedux /> <span>Redux</span>
            </li>

            <li className="technology bg-red-100 text-red-600 rounded-full">
              <SiReacttable /> <span>React-query</span>
            </li>

            <li className="technology bg-sky-100 text-sky-600 rounded-full">
              <SiTailwindcss /> <span>Tailwind</span>
            </li>

            <li className="technology bg-orange-100 text-orange-600 rounded-full">
              <FaHtml5 /> <span>HTML</span>
            </li>

            <li className="technology bg-blue-100 text-blue-600 rounded-full">
              <DiCss3Full /> <span>CSS</span>
            </li>
          </ul>
        </div>
        <div className="border-r px-6">
          <h3 className="font-semibold text-xl my-4">Back-End Technologies</h3>
          <ul>
            <li>Javascript</li>
            <li>React</li>
            <li>Redux</li>
            <li>React-Query</li>
            <li>Axios</li>
            <li>Tailwind</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
        <div className=" px-6">
          <h3 className="font-semibold text-xl my-4">Tools</h3>
          <ul>
            <li>Visual Studio</li>
            <li>Git</li>
            <li>Webpack</li>
            <li>Eslint</li>
            <li>Heroku</li>
            <li>Netlify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
