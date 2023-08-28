import Image from 'next/image';
import React from 'react';

import Chevron from '~/svg/chevron.svg';
import Close from '~/svg/close.svg';

interface ImageModalProps {
  imageUrl: string;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ImageModal({
  imageUrl,
  onClose,
  onPrev,
  onNext,
}: ImageModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-between gap-28 bg-white p-40'>
      <Close
        className=' absolute right-40 top-40 h-11 w-11 cursor-pointer '
        onClick={onClose}
      />

      <Chevron
        className='top-1/2 h-10 w-10 -translate-y-1/2 rotate-180 transform cursor-pointer'
        onClick={onPrev}
      />

      <div className=' relative h-full flex-grow '>
        <Image
          src={imageUrl}
          alt='Project Photo'
          fill
          sizes='80vw'
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <Chevron
        className='top-1/2 h-10 w-10 -translate-y-1/2 transform cursor-pointer'
        onClick={onNext}
      />
    </div>
  );
}
