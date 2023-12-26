import React from 'react';

import WomanImg from '../assets/img/banner-woman2.webp';

export default function Hero() {
  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container h-full mx-auto'>
        <div className='flex items-center h-full pt-8'>
          {/* left side */}
          <div className='flex flex-1 flex-col items-center lg:items-start'>
            <h1 className='text-3xl leading-[44px] md:text-4xl md:leading-tight lg:text-6xl lg:leading-[1.2] font-bold md:max-w-[455px]'>
              프론트엔드 개발자
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg'>
              블록체인 도메인에서 웹앱, 모바일앱, 브라우저 익스텐션 개발 경험이
              있습니다. React, Next.js, ReactNative, Typescript 등을 사용할 수
              있습니다.
            </p>
            <button className='btn btn-lg bg-accent hover:bg-accent-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          {/* right side */}
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
}
