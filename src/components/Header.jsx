import React, { useEffect, useState } from 'react';

import Logo from '../assets/img/logo.svg';
import Nav from './Nav';
import Socials from './Socials';
import NavMobile from './NavMobile';

export default function Header() {
  const [bg, setBg] = useState(false);

  // 스크롤을 약간 내리면 생기는 효과 주기 위함:
  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? 'bg-tertiary h-20' : 'h-24'
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className='container mx-auto h-full flex items-center justify-between'>
        {/* LOGO */}
        <a href='#'>
          <img src={Logo} alt='' />
        </a>

        {/* NAV */}
        <div className='hidden lg:block'>
          <Nav />
        </div>

        {/* SOCIALS */}
        <div className='hidden lg:block'>
          <Socials />
        </div>

        {/* NAV MOBILE */}
        <div className='lg:hidden'>
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
