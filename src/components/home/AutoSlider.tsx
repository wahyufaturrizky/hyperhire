'use client';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import img from '../../../public/image.svg';
import target from '../../../public/icons/icon-target.svg';
import marketing from '../../../public/icons/icon-marketing.svg';
import call from '../../../public/icons/icon-call.svg';
import box from '../../../public/icons/icon-box.svg';

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <div className="slider-container animate-fadeIn">
      <Slider {...settings} arrows={false}>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={img} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={marketing} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={img} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={box} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={target} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-20 p-3 rounded-lg flex items-center gap-2 me-3">
            <div className="bg-white bg-opacity-50 w-fit p-3 rounded-lg">
              <Image src={call} alt="image" />
            </div>
            퍼블리셔
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
