import * as React from 'react';

export default function Footer() {
  return (
    <footer className='text-customGray h-44 w-full px-32 text-3xl font-light '>
      <div className='border-customGray relative flex w-full justify-between border-b border-t py-9'>
        <p>Designed @ [ BÂZ.SPACE ]</p>
        <div className='absolute flex w-full justify-center gap-8'>
          <div className='aspect-square h-10 rounded-full bg-stone-200' />
          <div className='aspect-square h-10 rounded-full bg-stone-200' />
        </div>
        <p>All Rights Reserved.</p>
      </div>
    </footer>
  );
}
