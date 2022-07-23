import React from 'react';
import { FaLongArrowAltRight, FaGithub } from 'react-icons/fa';

function Project(props) {
  const { title, subtitle, description, image } = props.project;
  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-[1fr_2fr] md:mx-6 mb-5 mx-2 py-14 px-6 rounded-md bg-white border-2 border-gray-200 shadow-lg">
      {/*-------> left side <---------*/}
      <div className="self-center md:pl-8">
        <p className="text-md mb-3 font-semibold">PROJECT</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-5">{title}</h2>
        <h5 className="text-xl text-gray-500 ">{subtitle}</h5>
        <p className="text-gray-500 text-lg mt-5">{description}</p>

        <div className="flex my-4">
          <button className="hover:bg-white text-xl border-solid border-2 rounded-full border-[#e96f54] bg-[#e96f54] cursor-pointer flex items-center transition-all justify-center h-12 py-0 px-8 text-center text-white text-semibold hover:text-[#ff895d]">
            <p>Explore</p>
            <FaLongArrowAltRight />
          </button>
          {/* <a href={clientGithub} target="_blank" rel="noopener noreferrer"> */}
          <button className="z-10 border-solid bg-[#e86d54] hover:bg-[#c94747] border-[#e96f54] hover:border-[#c94747] text-[#ffdbcf] hover:text-[#ff895d] rounded-full border-2 cursor-pointer flex items-center justify-center h-12 shadow-lg text-2xl my-0 mx-2 no-underline w-12">
            <FaGithub />
          </button>
          {/* </a> */}

          {/* <a href={website} target="_blank" rel="noopener noreferrer"> */}
          <button className="z-10 border-solid bg-[#e86d54] hover:bg-[#c94747] border-[#e96f54] hover:border-[#c94747] text-[#ffdbcf] hover:text-[#ff895d] rounded-full border-2 cursor-pointer flex items-center justify-center h-12 shadow-lg text-2xl my-0 mx-2 no-underline w-12">
            <FaLongArrowAltRight />
          </button>
          {/* </a> */}
        </div>
      </div>

      {/*------> right side <-------*/}
      <div className="relative transition-all duration-200 h-full w-full">
        <div className="relative flex items-center justify-end h-full w-full">
          {/* <a href="https//:google.com"> */}
          <div className="relative md:w-[70%] h-full flex items-center mb-5 md:mb-auto">
            <img
              className="w-full object-cover border-solid border-4 rounded-2xl border-[#3b1203]"
              src={image}
              alt=""
            />
            <img
              className="hidden absolute lg:flex bottom-0 -left-72 z-50 h-[80%] w-[100%]  object-contain"
              src={props.img}
              alt=""
            />
          </div>

          {/* -------> Links <-------- */}
        </div>
      </div>
    </div>
  );
}

export default Project;
