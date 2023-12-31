import React from 'react';

import { skills } from '../data';

export default function Skills() {
  return (
    <section className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-8 md:grid-flow-row'>
          {skills.map((skill, index) => {
            return (
              <div className='flex justify-center items-center' key={index}>
                <img src={skill.img} alt='' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
