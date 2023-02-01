import React from "react";

export default function Banner() {
  return (
    <div className="bg-[url('/images/homepage-banner.png')] w-full h-screen flex items-center justify-center">
      <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.31)] to-[rgba(0,0,0,0.29)]">
        <div className="w-full h-full pt-[150px] text-white">
          <div className="flex w-full h-full">
            <div className="flex justify-around items-center flex-col w-[250px]">
              <div className="flex items-center justify-center flex-col gap-3">
                <div className="w-[2px] h-[250px] bg-white before:content-[''] relative before:w-[3px] before:h-[100px] before:bg-red-500 before:absolute before:-left-[0.5px]" />
                <div className=" font-bold -rotate-90">01</div>
              </div>
              <div className="font-bold space-y-3">
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
              <div className="flex flex-row bg-[rgba(0,0,0,0.5)] items-center pl-16 gap-16">
                <div className="leading-[30px]">
                  <p className="text-[16px] font-bold text-[#DD2242]">01</p>
                  <h4 className="text-[26ox] font-medium">Pattani</h4>
                  <p className="text-[16px] text-[#939393]">
                    Conflict, Malay, history.
                  </p>
                </div>
                <div className="leading-[30px]">
                  <p className="text-[16px] font-bold text-[#DD2242]">02</p>
                  <h4 className="text-[26ox] font-medium">Yala</h4>
                  <p className="text-[16px] text-[#939393]">
                    Wildlife, beaches, tourism.
                  </p>
                </div>
                <div className="leading-[30px]">
                  <p className="text-[16px] font-bold text-[#DD2242]">03</p>
                  <h4 className="text-[26ox] font-medium">Naratiwat</h4>
                  <p className="text-[16px] text-[#939393]">
                    Malay, religion, border.
                  </p>
                </div>
                <div className="relative -top-12 h-[calc(100%+3rem)] self-start">
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
