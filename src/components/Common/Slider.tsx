'use client';
import React, { useState } from 'react';
import leftArrow from '../../../public/icons/leftArrow.svg';
import rightArrow from '../../../public/icons/rightArrow.svg';
import Image from 'next/image';
import dummyProfile from '../../../public/home/dummyProfile.png';
import Tooltip from './Tooltip';
import dollor from '../../../public/dollor.svg';
import flag from '../../../public/flag.svg';

interface SliderProps {
  slidesData: string[]; // Array of slide content (e.g., text or image URLs)
}

const Slider: React.FC<SliderProps> = ({ slidesData }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  // Handle previous slide
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };
  console.log({ activeIndex });
  // Handle next slide
  const handleNext = () => {
    setActiveIndex((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-center items-center ">
        {slidesData.map((content, index) => (
          <Tooltip
            content={
              <div className="flex gap-2 items-center">
                <Image src={dollor} alt="price" />
                <div className="text-green-500 text-lg font-bold">월 100만원</div>
              </div>
            }
            key={index}
            position="top-center"
            layOutClassName={
              index === 0
                ? `translate-x-40 ${activeIndex === 0 ? 'z-20' : 'z-10'}`
                : index === 2
                  ? `-translate-x-40 ${activeIndex === 2 ? 'z-20' : 'z-10'}`
                  : activeIndex === 1
                    ? 'z-20'
                    : 'z-10'
            }
            marginClass="mb-7">
            <div
              className={` duration-500 ease-in-out relative drop-shadow-2xl slide-width  ${
                index === activeIndex
                  ? 'scale-110 opacity-100' // Active slide styles
                  : 'scale-95 opacity-90' // Inactive slide styles
              }`}>
              <div className="bg-white rounded-xl flex justify-center items-center  py-6">
                <div className="flex flex-col gap-5 items-center w-full">
                  <div className="relative flex justify-center">
                    <Image src={dummyProfile} unoptimized alt="profile" quality={100} className="lg:w-full w-3/5" />
                    <Image src={flag} alt="flag" className="absolute bottom-0 right-3 " />
                  </div>
                  <div>
                    <div className="font-bold text-black text-xl lg:text-2xl">Abhishek Gupta</div>
                    <div className="text-blue-500 font-bold text-center text-sm lg:text-base">마케팅 · 2y+</div>
                  </div>
                  <div className="flex flex-wrap gap-1 lg:gap-2 justify-center">
                    <div className="border border-slate-700/50 rounded-lg text-xs lg:text-base text-slate-600 font-bold px-2 py-1 w-fit">
                      마케팅 콘텐츠 제작
                    </div>
                    <div className="border border-slate-700/50 rounded-lg text-xs lg:text-base text-slate-600 font-bold px-2 py-1 w-fit">
                      인스타그램 관리
                    </div>
                    <div className="border border-slate-700/50 rounded-lg text-xs lg:text-base text-slate-600 font-bold px-2 py-1 w-fit">
                      트위터 관리
                    </div>
                    <div className="border border-slate-700/50 rounded-lg text-xs lg:text-base text-slate-600 font-bold px-2 py-1 w-fit">
                      블로그 글 작성
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Tooltip>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white  rounded-full">
        <Image src={leftArrow} alt="leftArrow" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white  rounded-full">
        <Image src={rightArrow} alt="rightArrow" />
      </button>
    </div>
  );
};

export default Slider;
