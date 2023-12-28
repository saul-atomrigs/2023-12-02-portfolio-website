import React from 'react';
import { Link } from 'react-scroll';

import { navigation } from '../data';

export default function Nav() {
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {navigation.map((item, index) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={index}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
