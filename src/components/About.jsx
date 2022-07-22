import React from 'react';
// import profileImg from '../assets/images/md_musa.png';
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

      <div className="px-5">
        <h3 className="leading-normal font-bold text-6xl">HEY,</h3>
        <p className="text-xl leading-normal mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolorum esse natus
          numquam deserunt, sapiente cum pariatur quam cupiditate impedit. j
        </p>

        <p>
          <b>Technologies: </b>
          JavaScript, ES6, React, Redux, Redux toolkit, Tailwind, Node, Express, MongoDB,
          Mongoose, MVC-Architecture, Axios, OOP, Data Structure & Algorithm, React-Query
        </p>
      </div>
    </section>
  );
}

export default About;
