import React from "react";

export default function About() {
  return (
    <div className="bg-neutral-900">
      <div className="container text-white py-[150px] space-y-12 md:space-y-32">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-[100px]">
          <img
            className="w-full h-full"
            src="/images/about.png"
            alt="About Pattani"
          />
          <div className="space-y-6">
            <h3 className="text-5xl">
              The walkways of
              <br /> Indonesia spellbind
            </h3>
            <p className=" text-gray-300 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="w-full md:w-[150px] h-[50px] rounded-full bg-main-red">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-[100px]">
          <img
            className="w-full h-full order-1 md:order-2"
            src="/images/about.png"
            alt="About Pattani"
          />
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-5xl">
              The walkways of
              <br /> Indonesia spellbind
            </h3>
            <p className=" text-gray-300 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="w-full md:w-[150px] h-[50px] rounded-full bg-main-red">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-[100px]">
          <img
            className="w-full h-full"
            src="/images/about.png"
            alt="About Pattani"
          />
          <div className="space-y-6">
            <h3 className="text-5xl">
              The walkways of
              <br /> Indonesia spellbind
            </h3>
            <p className=" text-gray-300 font-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="w-full md:w-[150px] h-[50px] rounded-full bg-main-red">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
