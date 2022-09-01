import React from "react";
import "../styles/hero.css";

function Hero() {
  return (
    <div className="bgr">
      <section className="relative pt-12 ">
        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
            <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
              <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight ">
                Pay yourself anytime, any day!
              </h1>
              <p className="mt-2 text-lg text-white sm:mt-6 font-inter">
                Whether you’re a Big Spender or an Economic Guru, your money
                makes it to Friday. We help you budget for rainy days.
              </p>
              <a
                href="#"
                title=""
                className="inline-flex px-8 mr-4 py-4 mt-8 text-lg font-bold text-black transition-all duration-200 bg-[#ECEC0B] border border-transparent rounded sm:mt-10 font-pj hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Apple Store
              </a>
              <a
                href="#"
                title=""
                className="inline-flex px-8 mr-4 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-black border border-transparent rounded sm:mt-10 font-pj hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Play Store
              </a>
            </div>

            <div className="xl:col-span-1">
              <img
                className="w-[80%] mx-auto"
                src="https://i.postimg.cc/50Grck22/phonescreen2.gif"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;