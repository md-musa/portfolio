import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
function Banner() {
  //mx-6 mt-6 rounded-md grid md:grid-cols-2 md:border-4 md:mx-6 md:mt-6 shadow-2xl md:rounded-md
  return (
    <section className="grid p-10 md:p-0 m-2 md:grid-cols-2 md:m-6 rounded-md shadow-2xl md:border-4 border-[#e56953] bg-gradient-to-br from-[#ff895d] to-[#c94747]">
      <div className="self-center md:px-6 md:pl-36">
        {/*--------> Logo <--------- */}
        <div className="cursor-pointer shadow-xl w-16 h-16 rounded-full bg-[#cc4b48] flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-[#470f06] flex items-center justify-center">
            <p className="logo font-bold text-3xl text-[#cc4b48] text-center">M</p>
          </div>
        </div>

        <div className="h-1 shadow-lg w-16 mt-4 bg-[#cc4b48]"></div>

        <h2 className="text-white leading-normal font-bold text-6xl">HEY,</h2>
        <p className="text-xl leading-normal mb-8 text-white">
          I'm Musa. I'm a Bangladeshi based Frontend Web Developer and Software Engineer
          building cool stuff.
        </p>

        {/* -------> Social media <--------- */}
        <div className="social-item flex space-x-2 flex-wrap">
          <div>
            <a
              className="link"
              target="_blank"
              href="mailto:mohammad.musa706@gmail.com"
              rel="noreferrer">
              <FaEnvelope />
            </a>
          </div>
          <div>
            <a
              className="link"
              target="_blank"
              href="https://linkedin.com/in/mohammad-musa1"
              rel="noreferrer">
              <FaLinkedin />
            </a>
          </div>
          <div>
            <a
              className="link"
              target="_blank"
              href="https://github.com/md-musa"
              rel="noreferrer">
              <FaGithub />
            </a>
          </div>
          <div className="flex-grow">
            <a
              className=""
              target="_blank"
              href="https://drive.google.com/file/d/1601i7nbCE26t_zKs6GQVrGrbMvT-e-Ac/view?usp=sharing"
              rel="noreferrer">
              <button className="mt-5 w-full md:mt-0 md:w-auto hover:bg-white hover:text-[#ff895d] transition-all">
                My Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <img
          className="w-4/5 object-contain"
          src="https://happily.ai/lib_wfKJyoksALKsfAWv/ducg62tckz47evnt.png?w=1200&h=900&fit=max&dpr=2"
          alt=""
        />
      </div>
    </section>
  );
}

export default Banner;
// // https://ouch-cdn2.icons8.com/5wC5Tnyvr1lK8O1O0gTskh2UqKIOxP6wSz5QkVN5n0M/rs:fit:256:314/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzU2/LzdjZmExMGE4LTZj/YTctNDFmZC1hM2Ix/LTA4MTRkNzFkMWE1/My5wbmc.png

// // https://ouch-cdn2.icons8.com/sOtcNTUxwRkx1JB8cjv8LQJbqPLr5IpKyFTgq5qllAg/rs:fit:256:297/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTky/L2FkNjQ4NGIwLThh/OTAtNGI1Yi1iMDc2/LTUwYWVjMWMwMDE3/Yy5wbmc.png

// //https://cdn3d.iconscout.com/3d/premium/thumb/man-working-on-laptop-2996955-2493509.png
