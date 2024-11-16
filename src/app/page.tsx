import heroStyles from '../styles/home/hero.module.css';
import AppHeader from '@/components/layout/AppHeader';
import AppFooter from '@/components/layout/AppFooter';
import Tooltip from '@/components/Common/Tooltip';
import Slider from '@/components/Common/Slider';
import AutoSlider from '@/components/home/AutoSlider';
import checkBox from '../../public/icons/checkBox.svg';
import Image from 'next/image';
export default function Home() {
  const slidesData = ['This is Slide 1', 'This is Slide 2', 'This is Slide 3'];
  return (
    <>
      <section className={heroStyles.heroBanner}>
        <div className="container mx-auto p-4">
          <AppHeader />
          <div className="py-12 md:py-20">
            <section className={`${heroStyles.mainSection} mb-20 flex flex-col md:flex-row  md:gap-3 gap-24`}>
              <div className="left-sec w-full md:w-2/4">
                <Tooltip content="풀타임, 파트타임" position="top-left">
                  <div className={`text-4xl md:text-5xl font-bold animate-fadeUp leading-normal	 `}>
                    최고의 실력을 가진 외국인 인재를 찾고 계신가요?
                  </div>
                </Tooltip>
                <div className="text-2xl my-8 font-bold animate-fadeUp text-white/80">
                  법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
                </div>
                <div className="text-lg underline animate-fadeUp md:block hidden">개발자가 필요하신가요?</div>
                <div className="hidden md:flex gap-10 mt-16 animate-fadeIn">
                  <div>
                    <p className="text-lg font-bold pt-2 mb-3 w-3/5 border border-x-0 border-b-0 border-t-1 border-white">
                      평균 월 120만원
                    </p>
                    <p className="text-lg">임금을 해당 국가를 기준으로 계산합니다.</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold pt-2 mb-3 w-3/5 border border-x-0 border-b-0 border-t-1 border-white">
                      평균 월 120만원
                    </p>
                    <p className="text-lg">임금을 해당 국가를 기준으로 계산합니다.</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold pt-2 mb-3 w-3/5 border border-x-0 border-b-0 border-t-1 border-white">
                      평균 월 120만원
                    </p>
                    <p className="text-lg">임금을 해당 국가를 기준으로 계산합니다.</p>
                  </div>
                </div>
              </div>

              <div className="right-sec w-full md:w-2/4 animate-fadeIn">
                <Slider slidesData={slidesData} />
              </div>
            </section>
            <div className="hidden md:block">
              <AutoSlider />
            </div>
            <div className="sm:hidden grid grid-cols-2 gap-2">
              <div className="flex gap-2 items-center">
                <Image src={checkBox} alt="check" />
                한국어 능력
              </div>
              <div className="flex gap-2 items-center">
                <Image src={checkBox} alt="check" />
                업무 수행 능력
              </div>
              <div className="flex gap-2 items-center">
                <Image src={checkBox} alt="check" />
                겸업 여부
              </div>
              <div className="flex gap-2 items-center">
                <Image src={checkBox} alt="check" />
                평판 조회
              </div>
            </div>
            <div className="sm:hidden block text-yellow-300 font-bold underline mt-5">개발자가 필요하신가요?</div>
          </div>
        </div>
      </section>
      <AppFooter />
    </>
  );
}
