import { motion } from 'framer-motion';
import React from 'react';

import Blue from '~/svg/blue-shape.svg';
import Close from '~/svg/close.svg';
import Green from '~/svg/green-shape.svg';
import MobileLogo from '~/svg/mobile-logo.svg';
import OpenMenu from '~/svg/open-menu.svg';
import Pink from '~/svg/pink-shape.svg';
import Yellow from '~/svg/yellow-shape.svg';

interface ComponentProps {
  handleSearchClick: () => void;
  handleLogoClick: () => void;
  handleMenuClick: () => void;
}

export default function MobileSearch({
  handleSearchClick,
  handleLogoClick,
  handleMenuClick,
}: ComponentProps) {
  return (
    <motion.div
      className='fixed inset-0 z-50 flex h-[100svh] flex-col items-center justify-between gap-28 bg-white p-56 md:flex-row'
      key='mobile-menu'
      initial={{ x: '-100vw' }}
      animate={{ x: '0' }}
      exit={{ x: '-100vw' }}
      transition={{
        ease: 'easeInOut',
        duration: 0.5,
      }}
    >
      {/* Menu Header */}
      <div className='mb-48 flex h-fit w-full justify-between'>
        <Close
          onClick={handleSearchClick}
          className={` pointer-events-auto h-40 w-40 cursor-pointer`}
        />
        <MobileLogo
          onClick={handleLogoClick}
          className={` pointer-events-auto h-40 w-80 cursor-pointer`}
        />
        <OpenMenu
          className=' h-40 w-40 cursor-pointer md:h-11 md:w-11'
          onClick={() => handleMenuClick()}
        />
      </div>

      <div className='flex w-full flex-grow flex-col justify-between'>
        {/* Search Input */}
        <textarea
          autoFocus
          placeholder='TYPE TO SEARCH'
          className='search-input text-customGray h-fit w-full border-none text-center text-[15rem] font-light 
                      leading-normal placeholder-stone-300 focus:ring-0'
        />

        {/* Shapes */}
        <div className='relative flex h-1/5 w-full items-center justify-center mix-blend-multiply'>
          <Pink className='h-full w-1/2 -rotate-12 p-10' />
          <Green className='h-full w-1/2 p-10' />
          <Yellow className='h-full w-1/2 scale-90 p-10' />
          <Blue className='h-full w-1/2 p-10' />
        </div>
      </div>
    </motion.div>
  );
}
