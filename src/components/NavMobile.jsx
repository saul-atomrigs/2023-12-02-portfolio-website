import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { XIcon, MenuAlt3Icon } from '@heroicons/react/outline';

import { navigation } from '../data';
import Socials from './Socials';

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <nav className='relative'>
      {/* menu icon */}
      <div
        onClick={() => setIsOpen(true)}
        className='cursor-pointer text-white'
      >
        <MenuAlt3Icon className='w-8 h-8' />
      </div>

      {/* menu */}
      <motion.ul
        variants={ulVariants}
        initial='hidden'
        animate={isOpen ? 'visible' : ''}
        className={`${
          isOpen ? 'right-0' : '-right-full'
        } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center bg-primary transition-all duration-300`}
      >
        {/* close icon */}
        <div
          onClick={() => setIsOpen(false)}
          className='cursor-pointer absolute top-8 right-8'
        >
          <XIcon className='w-8 h-8 text-white' />
        </div>

        {/* menu items */}
        {navigation.map((item, index) => {
          return (
            <li
              key={index}
              className='text-2xl text-white mb-8 hover:text-accent cursor-pointer'
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
      </motion.ul>
    </nav>
  );
}
