import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

import MobileChevron from '~/svg/button-arrow.svg';
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
    <motion.div
      key='modal'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='fixed inset-0 z-50 flex flex-col items-center justify-between gap-28 bg-white p-40 md:flex-row'
    >
      <Chevron
        className='top-1/2 hidden h-10 w-10 -translate-y-1/2 rotate-180 transform cursor-pointer md:block'
        onClick={onPrev}
      />

      <div className=' relative h-fit w-full flex-grow md:h-full '>
        <Image
          src={imageUrl}
          alt='Project Photo'
          fill
          sizes='80vw'
          quality={98}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>

      <Chevron
        className='top-1/2 hidden h-10 w-10 -translate-y-1/2 transform cursor-pointer md:block'
        onClick={onNext}
      />

      <Close
        className=' z-100 absolute right-40 top-40 h-36 w-36 cursor-pointer md:h-11 md:w-11'
        onClick={onClose}
      />

      <div className='flex w-full justify-between md:hidden'>
        <MobileChevron
          className='top-1/2 h-56 w-56 rotate-180 transform cursor-pointer md:hidden'
          onClick={onPrev}
        />
        <MobileChevron
          className='top-1/2 h-56 w-56 transform cursor-pointer md:hidden'
          onClick={onNext}
        />
      </div>
    </motion.div>
  );
}
