import React from 'react';
import colorLogo from '../../../public/colorLogo.svg';
import code from '../../../public/icons/icon-code.svg';
import kor from '../../../public/icons/icon-kor.svg';
import avatar from '../../../public/icons/icon-avatar.svg';
import gear from '../../../public/icons/icon-gear.svg';
import lineArrow from '../../../public/icons/lineArrowRight.svg';

import Image from 'next/image';
const AppFooter = () => {
  return (
    <div className="bg-slate-100 p-4">
      <div className="container mx-auto py-12 md:py-20 ">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-4 gap-y-4 md:gap-y-16 ">
          <div className="col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2 mb-4 md:mb-0">
            <Image src={colorLogo} alt="logo" />
            <div className="text-black text-lg font-bold my-5">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </div>
            <div className="text-sm text-gray-500 font-black mb-4">010-0000-0000</div>
            <span className="text-sm text-gray-500 font-black">aaaaa@naver.com</span>
          </div>
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <div className="bg-slate-700 bg-opacity-10 w-fit p-3 rounded-lg">
              <Image src={code} alt="code" />
            </div>
            <div className="text-black font-bold text-sm">해외 개발자 원격 채용</div>
            <div className="flex gap-2 cursor-pointer">
              <div className="text-slate-400 text-sm font-bold">바로가기 </div>
              <Image src={lineArrow} alt="goto" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <div className="bg-slate-700 bg-opacity-10 w-fit p-3 rounded-lg">
              <Image src={avatar} alt="code" />
            </div>
            <div className="text-black font-bold text-sm">외국인 원격 채용 (비개발)</div>
            <div className="flex gap-2 cursor-pointer">
              <div className="text-slate-400 text-sm font-bold">바로가기 </div>
              <Image src={lineArrow} alt="goto" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <div className="bg-slate-700 bg-opacity-10 w-fit p-3 rounded-lg">
              <Image src={kor} alt="code" />
            </div>
            <div className="text-black font-bold text-sm">한국어 가능 외국인 채용</div>
            <div className="flex gap-2 cursor-pointer">
              <div className="text-slate-400 text-sm font-bold">바로가기 </div>
              <Image src={lineArrow} alt="goto" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-5 flex flex-col gap-3">
            <div className="bg-slate-700 bg-opacity-10 w-fit p-3 rounded-lg">
              <Image src={gear} alt="code" />
            </div>
            <div className="text-black font-bold text-sm">해외 개발자 활용 서비스</div>
            <div className="flex gap-2 cursor-pointer">
              <div className="text-slate-400 text-sm font-bold">바로가기 </div>
              <Image src={lineArrow} alt="goto" />
            </div>
          </div>
          <div>
            <p className="text-black font-bold mt-10 md:mt-0">상호명</p>
            <p className="text-sm text-gray-500 font-black my-2">하이퍼하이어</p>
            <p className="text-sm text-gray-500 font-black">Hyperhire India Private Limited</p>
          </div>
          <div>
            <p className="text-black font-bold mt-10 md:mt-0">대표 CEO</p>
            <p className="text-sm text-gray-500 font-black my-2">김주현</p>
            <p className="text-sm text-gray-500 font-black">Juhyun Kim</p>
          </div>
          <div>
            <p className="text-black font-bold mt-10 md:mt-0">사업자등록번호 CIN</p>
            <p className="text-sm text-gray-500 font-black my-2">427-86-01187</p>
            <p className="text-sm text-gray-500 font-black">U74110DL2016PTC290812</p>
          </div>
          <div className="col-span-2 md:col-span-4 lg:col-span-2 xl:col-span-2 mt-10 md:mt-0">
            <p className="text-black font-bold">주소 ADDRESS</p>
            <p className="text-sm text-gray-500 font-black my-2">서울특별시 강남대로 479, 지하 1층 238호</p>
            <p className="text-sm text-gray-500 font-black">
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </p>
          </div>
          <div className="text-sm text-gray-500 font-black mt-6">ⓒ 2023 Hyperhire</div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
