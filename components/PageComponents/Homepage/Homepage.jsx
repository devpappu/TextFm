import Head from "next/head";
import Image from "next/image";
import React from "react";
const axios = require("axios");

const Homepage = () => {
  return (
    <>
      <Head>
        <title>Talent Market</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        {/* hero section */}

        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-8 items-center section__padding">
          
         <div className="mt-4 hero_image">
            <Image
              width="400px"
              height="600px"
              src="/images/main_india.jpg"
              className="hero_image"
              alt="img"
            />
          </div>
          
          <div className="hero__text__image">
            <div>

            <div className="flex flex-wrap lg:gap-6 md:gap-6 gap-5">
                <button className="rounded py-3 lg:w-52 md:w-52 w-full bg-blue ">
                  BLOGS
                </button>
                <button className="bg-blue rounded py-3 lg:w-52 md:w-52 w-full">
                  NEWS
                </button>
              </div>


              <h1 className="mt-16">
                <span className="lg:text-5xl md:text-5xl text-4xl text-orange">
                Stay informed in 60 words.
                </span>
              </h1>
            </div>
            <div>
              <div className="my-8">
                <p className="mt-3 textgray-300 hero__text__block ">
                We understand you don`t have time to go through long news articles everyday. So we cut the clutter and deliver them, in 60-word shorts. Short news for the mobile generation.
                </p>
              </div>

             

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
