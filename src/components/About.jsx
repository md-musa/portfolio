import React from 'react';
import profileImg from '../assets/images/md_musa.png';
function About() {
  return (
    <section className="grid grid-cols-[1.5fr_2fr] shadow-lg h-[500px] mx-6 rounded-md mt-10 border">
      <div className="h-full w-full flex items-center justify-center">
        <div className="border h-[80%] w-[80%] rounded-xl overflow-hidden">
          <img
            className="object-contain"
            style={{ filter: 'grayscale(20%)' }}
            src={profileImg}
            alt=""
            srcset=""
          />
        </div>
      </div>
      <div className="py-8">
        <h3 className="leading-normal font-bold text-6xl">HEY,</h3>
        <p className="text-xl leading-normal mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum
          esse natus numquam deserunt, sapiente cum pariatur quam cupiditate
          impedit.
        </p>
      </div>
    </section>
  );
}

export default About;
