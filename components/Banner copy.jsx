import React from "react";

export default function Banner() {
  return (
    <div className="bg-[url('/images/homepage-banner.png')] bg-center bg-cover bg-no-repeat w-full min-h-screen flex items-center justify-center">
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.31)] to-[rgba(0,0,0,0.29)]">
        <div className="w-full h-full pt-[150px] text-white relative z-10">
          <div className="flex w-full h-full">
            <div className="hidden md:flex justify-around items-center flex-col w-[250px]">
              <div className="flex items-center justify-center flex-col gap-3">
                <div className="w-[2px] h-[250px] bg-white before:content-[''] relative before:w-[3px] before:h-[100px] before:bg-red-500 before:absolute before:-left-[0.5px]" />
                <div className=" font-bold -rotate-90">01</div>
              </div>
              <div className="font-bold space-y-3 block">
                <div className="-rotate-90">Tw</div>
                <div className="-rotate-90">In</div>
                <div className="-rotate-90">Fb</div>
              </div>
            </div>
            <div className="w-full pt-8 flex flex-col justify-between">
              <div className="flex flex-col gap-6">
                <h1 className="uppercase text-[80px] font-bold leading-[90px]">
                  explore <br />
                  patani
                </h1>
                <button className="w-[200px] h-[60px] rounded-full bg-main-red">
                  Start travelling
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-5 bg-[rgba(0,0,0,0.5)] text-center md:text-left items-center md:pl-16 md:gap-16 ">
                <div className="leading-[30px] 2xl:leading-[50px]">
                  <p className="text-[16px] 2xl:text-[24px] font-bold text-[#DD2242]">
                    01
                  </p>
                  <h4 className="text-[16px] 2xl:text-[36px] font-medium">
                    Pattani
                  </h4>
                  <p className="text-[16px] 2xl:text-[24px] text-[#939393]">
                    Conflict, Malay, history.
                  </p>
                </div>
                <div className="leading-[30px] 2xl:leading-[50px]">
                  <p className="text-[16px] 2xl:text-[24px] font-bold text-[#DD2242]">
                    02
                  </p>
                  <h4 className="text-[16px] 2xl:text-[36px] font-medium">
                    Yala
                  </h4>
                  <p className="text-[16px] 2xl:text-[24px] text-[#939393]">
                    Wildlife, beaches, tourism.
                  </p>
                </div>
                <div className="leading-[30px] 2xl:leading-[50px]">
                  <p className="text-[16px] 2xl:text-[24px] font-bold text-[#DD2242]">
                    03
                  </p>
                  <h4 className="text-[16px] 2xl:text-[36px] font-medium">
                    Naratiwat
                  </h4>
                  <p className="text-[16px] 2xl:text-[24px] text-[#939393]">
                    Malay, religion, border.
                  </p>
                </div>
                <div className="2xl:col-span-2 relative -top-12 h-[calc(100%+3rem)] w-full self-start">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/vdo-mock.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
