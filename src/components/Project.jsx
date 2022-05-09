import React from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';

function Project(props) {
  const { title, subtitle, description, image, subImage } = props.project;
  return (
    <div className="grid grid-cols-[1.5fr_2fr] shadow-lg h-[500px] mx-6 rounded-md mt-4 border">
      <div className="self-center px-14">
        <p className="text-md mb-6 font-semibold">PROJECT</p>
        <h2 className="text-6xl font-bold mb-5">{title}</h2>
        <h5 className="text-xl text-gray-500 ">{subtitle}</h5>
        <p className="text-gray-500 text-lg mt-5">{description}</p>

        <button className="hover:bg-white space-x-2  mt-5 text-xl border-solid border-2 rounded-full border-[#e96f54] bg-[#e96f54] cursor-pointer flex items-center transition-all justify-center h-12 py-0 px-8 text-center text-white text-semibold hover:text-[#ff895d]">
          <p>Explore</p>
          <FaLongArrowAltRight />
        </button>
      </div>

      <div class="h-full w-full self-center mx-auto pr-14 flex items-center justify-end">
        <div class="relative h-[70%] w-[90%] shadow-xl">
          <img
            className="h-full -z-10 w-full object-cover border-solid border-4 rounded-2xl border-[#3b1203]"
            src={image}
            alt=""
            srcset=""
          />
          <img
            className="absolute bottom-0 -left-72 z-50 h-[100%] w-[100%]  object-contain"
            src={subImage}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
