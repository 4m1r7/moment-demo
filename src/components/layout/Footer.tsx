import * as React from 'react';

import Instagram from '~/svg/instagram.svg';

export default function Footer() {
  return (
    <footer className='text-customGray flex h-fit w-full flex-col justify-center px-32 py-52 text-7xl font-light md:py-16 md:text-3xl '>
      <div className='border-customGray flex w-full justify-center gap-28 border-t py-20 md:hidden'>
        <a href='https://www.instagram.com/momentstudio.arch/' target='_blank'>
          <Instagram
            src='/instagram.svg'
            className='h-24 w-24'
            style={{
              filter:
                'brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(0%) hue-rotate(225deg) brightness(92%) contrast(89%)',
            }}
          />
        </a>
      </div>

      <div className='border-customGray relative flex w-full justify-between border-b border-t py-9'>
        <p>Designed @ [ BÂZ.SPACE ]</p>

        <div className='absolute hidden w-full justify-center gap-8 md:flex'>
          <a
            href='https://www.instagram.com/momentstudio.arch/'
            target='_blank'
          >
            <Instagram
              src='/instagram.svg'
              className='h-8 w-8'
              style={{
                filter:
                  'brightness(0) saturate(100%) invert(54%) sepia(0%) saturate(0%) hue-rotate(225deg) brightness(92%) contrast(89%)',
              }}
            />
          </a>
        </div>

        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
}
