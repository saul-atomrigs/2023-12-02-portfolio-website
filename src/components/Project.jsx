import React from 'react';

import Image from '../assets/img/about.webp';
import Slider from './Slider';

export default function Project({ title }) {
  return (
    <section className='section bg-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-24'>
          {/* <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          /> */}
          <Slider />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-6'>
                {title}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
