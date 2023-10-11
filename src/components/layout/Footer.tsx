import * as React from 'react';

export default function Footer() {
  return (
    <footer className='text-customGray flex h-fit w-full flex-col justify-center px-32 py-52 text-7xl font-light md:py-16 md:text-3xl '>
      <div className='border-customGray flex w-full justify-between gap-28 border-t py-20 md:hidden'>
        <div className='aspect-square h-48 rounded-full bg-stone-200' />
        <div className='aspect-square h-48 rounded-full bg-stone-200' />
        <div className='aspect-square h-48 rounded-full bg-stone-200' />
      </div>

      <div className='border-customGray relative flex w-full justify-between border-b border-t py-9'>
        <p>Designed @ [ BÂZ.SPACE ]</p>

        <div className='absolute hidden w-full justify-center gap-8 md:flex'>
          <div className='aspect-square h-10 rounded-full bg-stone-200' />
          <div className='aspect-square h-10 rounded-full bg-stone-200' />
          <div className='aspect-square h-10 rounded-full bg-stone-200' />
        </div>

        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
}
