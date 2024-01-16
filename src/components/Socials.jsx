import React from 'react';

import { social } from '../data';

export default function Socials() {
  return (
    <ul className='flex space-x-6'>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent hover:text-accent-hover cursor-pointer'
            key={index}
          >
            <a className='text-base' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
