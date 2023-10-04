import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import Blue from '~/svg/blue-shape.svg';
import CloseMenu from '~/svg/close-menu.svg';
import Green from '~/svg/green-shape.svg';
import MobileLogo from '~/svg/mobile-logo.svg';
import Pink from '~/svg/pink-shape.svg';
import Search from '~/svg/search.svg';
import Yellow from '~/svg/yellow-shape.svg';

interface ComponentProps {
  handleMenuClick: () => void;
  handleLogoClick: () => void;
  handleSearchClick: () => void;
}

export default function MobileMenu({
  handleMenuClick,
  handleLogoClick,
  handleSearchClick,
}: ComponentProps) {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex flex-col items-center justify-between gap-28 bg-white p-56 md:flex-row'
      key='mobile-menu'
      initial={{ x: '100vw' }}
      animate={{ x: '0' }}
      exit={{ x: '100vw' }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      {/* Menu Header */}
      <div className='mb-48 flex h-fit w-full justify-between'>
        <Search
          onClick={handleSearchClick}
          className={` pointer-events-auto h-40 w-40 cursor-pointer`}
        />
        <MobileLogo
          onClick={handleLogoClick}
          className={` pointer-events-auto h-40 w-80 cursor-pointer`}
        />
        <CloseMenu
          className=' h-40 w-40 cursor-pointer md:h-11 md:w-11'
          onClick={() => handleMenuClick()}
        />
      </div>

      {/* Navigation Links */}
      <Link
        href='/projects'
        className='border-customGray text-customGray w-full cursor-pointer rounded-full border px-24 py-28 text-center text-8xl font-light'
        onClick={() => handleMenuClick()}
      >
        Projects
      </Link>

      <Link
        href='/about'
        className='border-customGray text-customGray w-full cursor-pointer rounded-full border px-24 py-28 text-center text-8xl font-light'
        onClick={() => handleMenuClick()}
      >
        About
      </Link>

      <Link
        href='/contact'
        className='border-customGray text-customGray w-full cursor-pointer rounded-full border px-24 py-28 text-center text-8xl font-light'
        onClick={() => handleMenuClick()}
      >
        Contact
      </Link>

      {/* Shapes */}
      <div className='relative flex w-full flex-grow translate-y-10 items-center justify-center mix-blend-multiply'>
        <Blue className=' absolute h-[32rem] w-[32rem] translate-x-32 rotate-[190deg]' />
        <Yellow className=' absolute h-[32rem] w-[32rem] -translate-y-40 translate-x-10 scale-[.85]' />
        <Green className=' absolute h-[32rem] w-[32rem] -translate-x-10 translate-y-20' />
        <Pink className=' absolute h-[32rem] w-[32rem] -translate-x-40 -translate-y-36' />
      </div>

      {/* Instagram Link */}
      <a
        href='https://www.instagram.com/momentstudio.arch/'
        target='_blank'
        className='border-customGray text-customGray w-full cursor-pointer rounded-full border px-24 py-28 text-center text-8xl font-light'
      >
        Follow us on Instagram
      </a>
    </motion.div>
  );
}
