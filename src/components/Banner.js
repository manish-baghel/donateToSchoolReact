import React from "react";
import Navbar from "./Navbar";


const Banner = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full
            w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <Navbar />

          <div
            className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12
                          sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2
                className="text-4xl tracking-tight leading-10 font-extrabold
                             text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                Make a Difference
                <br className="xl:hidden" />
                <span className="text-indigo-600"> Donate for a good Cause</span>
              </h2>
              <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg
                            sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Remember that the happiest people are not those getting more, but those giving more.
                Take a step in making India Great Again.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/requirements"
                    className="w-full flex items-center justify-center px-8 py-3 border
                    border-transparent text-base leading-6 font-medium rounded-md text-white
                    bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline
                    transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">Donate</a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/volunteer"
                    className="w-full flex items-center justify-center px-8 py-3 border
                    border-transparent text-base leading-6 font-medium rounded-md text-indigo-700
                    bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none
                    focus:shadow-outline focus:border-indigo-300 transition duration-150
                    ease-in-out md:py-4 md:text-lg md:px-10">Volunteer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1589087394126-9a3025e53867?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1047&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
