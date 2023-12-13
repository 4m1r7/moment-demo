import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Blue from '~/svg/blue-shape.svg';
import Arrow from '~/svg/button-arrow.svg';
import Green from '~/svg/green-shape.svg';
import Pink from '~/svg/pink-shape.svg';
import Yellow from '~/svg/yellow-shape.svg';

interface Position {
  x: string;
  y: string;
  width: string;
  height: string;
  rotate: number;
  opacity: number;
}
interface stagePositions {
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}

const ShapePositions: { [key: string]: stagePositions } = {
  firstPositions: {
    blue: {
      x: '11vw',
      y: '2vh',
      width: '50vw',
      height: '50vw',
      opacity: 1,
      rotate: 0,
    },
    yellow: {
      x: '2vw',
      y: '-5vh',
      width: '38vw',
      height: '38vw',
      opacity: 1,
      rotate: 0,
    },
    green: {
      x: '-7vw',
      y: '5vh',
      width: '40vw',
      height: '40vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-10vw',
      y: '-4.5vh',
      width: '42vw',
      height: '42vw',
      opacity: 1,
      rotate: 0,
    },
  },
  defaultPositions: {
    blue: {
      x: '-15vw',
      y: '-25vh',
      width: '50vw',
      height: '50vw',
      opacity: 1,
      rotate: 0,
    },
    yellow: {
      x: '25vw',
      y: '-5vh',
      width: '38vw',
      height: '38vw',
      opacity: 1,
      rotate: 0,
    },
    green: {
      x: '15vw',
      y: '25vh',
      width: '40vw',
      height: '40vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-16vw',
      y: '6vh',
      width: '42vw',
      height: '42vw',
      opacity: 1,
      rotate: -35,
    },
  },
  blue: {
    blue: {
      x: '0vw',
      y: '-3vh',
      width: '80vw',
      height: '80vw',
      opacity: 1,
      rotate: -130,
    },
    yellow: {
      x: '25vw',
      y: '23vh',
      width: '32vw',
      height: '32vw',
      opacity: 1,
      rotate: -80,
    },
    green: {
      x: '-6vw',
      y: '-32vh',
      width: '20vw',
      height: '20vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-16vw',
      y: '17vh',
      width: '26vw',
      height: '26vw',
      opacity: 1,
      rotate: -40,
    },
  },
  yellow: {
    blue: {
      x: '-22vw',
      y: '-31vh',
      width: '25vw',
      height: '25vw',
      opacity: 1,
      rotate: 195,
    },
    yellow: {
      x: '1vw',
      y: '-7vh',
      width: '85vw',
      height: '85vw',
      opacity: 1,
      rotate: -20,
    },
    green: {
      x: '25vw',
      y: '20vh',
      width: '35vw',
      height: '35vw',
      opacity: 1,
      rotate: 220,
    },
    pink: {
      x: '-12vw',
      y: '27vh',
      width: '32vw',
      height: '32vw',
      opacity: 1,
      rotate: -30,
    },
  },
  green: {
    blue: {
      x: '12vw',
      y: '-33vh',
      width: '24vw',
      height: '24vw',
      opacity: 1,
      rotate: 245,
    },
    yellow: {
      x: '-23vw',
      y: '-25vh',
      width: '31vw',
      height: '31vw',
      opacity: 1,
      rotate: -75,
    },
    green: {
      x: '0vw',
      y: '5vh',
      width: '90vw',
      height: '90vw',
      opacity: 1,
      rotate: 55,
    },
    pink: {
      x: '30vw',
      y: '27vh',
      width: '28vw',
      height: '28vw',
      opacity: 1,
      rotate: 90,
    },
  },
  pink: {
    blue: {
      x: '23vw',
      y: '25vh',
      width: '27vw',
      height: '27vw',
      opacity: 1,
      rotate: 165,
    },
    yellow: {
      x: '-5vw',
      y: '35VW',
      width: '25vw',
      height: '25vw',
      opacity: 1,
      rotate: -75,
    },
    green: {
      x: '22vw',
      y: '7vh',
      width: '30vw',
      height: '30vw',
      opacity: 1,
      rotate: 110,
    },
    pink: {
      x: '-1vw',
      y: '-15vh',
      width: '85vw',
      height: '85vw',
      opacity: 1,
      rotate: -70,
    },
  },
};

const blueJiggle = {
  y: [
    '8px',
    '12px',
    '5px',
    '2px',
    '-5px',
    '-9px',
    '-11px',
    '-4px',
    '0px',
    '5px',
    '8px',
  ],
  x: ['5px', '0px', '-10px', '2px', '10px', '5px'],
  transition: {
    duration: 12,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

const yellowJiggle = {
  y: [
    '0px',
    '5px',
    '8px',
    '12px',
    '5px',
    '2px',
    '-5px',
    '-9px',
    '-11px',
    '-4px',
    '0px',
  ],
  x: ['-10px', '2px', '10px', '5px', '0px', '-10px'],
  transition: {
    duration: 13,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

const greenJiggle = {
  y: [
    '12px',
    '5px',
    '2px',
    '-5px',
    '-9px',
    '-11px',
    '-4px',
    '0px',
    '5px',
    '8px',
    '12px',
  ],
  x: ['10px', '5px', '0px', '-10px', '2px', '10px'],
  transition: {
    duration: 11,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

const pinkJiggle = {
  y: [
    '-5px',
    '-9px',
    '-11px',
    '-4px',
    '0px',
    '5px',
    '8px',
    '12px',
    '5px',
    '2px',
    '-5px',
  ],
  x: ['2px', '10px', '5px', '0px', '-10px', '2px'],
  transition: {
    duration: 10,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

interface componentProps {
  mobileHeaderMode?: string;
  setMobileHeaderMode: (mode: string) => void;
}

export default function MobileShapes({
  mobileHeaderMode,
  setMobileHeaderMode,
}: componentProps) {
  const [positions, setPositions] = useState<stagePositions>(
    ShapePositions.firstPositions
  );
  const [activeShape, setActiveShape] = useState<string | null>(null);
  const [showDefaultMode, setShowDefaultMode] = useState(true);

  const handleShapeClick = (shape: string) => {
    if (showDefaultMode) {
      setPositions(ShapePositions['defaultPositions']);
      setShowDefaultMode(false);
      setActiveShape(null);
      setMobileHeaderMode('home');
    } else if (positions === ShapePositions[shape]) {
      setPositions(ShapePositions['defaultPositions']);
      setActiveShape(null);
      setMobileHeaderMode('home');
    } else {
      setPositions(ShapePositions[shape]);
      setActiveShape(shape);
      setMobileHeaderMode('home');
    }
  };

  useEffect(() => {
    mobileHeaderMode == 'home'
      ? setPositions(ShapePositions.defaultPositions)
      : setPositions(ShapePositions.firstPositions);

    setActiveShape(null);
  }, [mobileHeaderMode]);

  return (
    <div className=' items-between pointer-events-none absolute top-0 z-0 flex h-screen w-full flex-col justify-center overflow-hidden md:hidden'>
      {/* Shape Elements */}
      {/* Blue */}
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center mix-blend-multiply'
        key='blue'
        initial={positions.blue}
        animate={positions.blue}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('blue')}
      >
        <motion.div
          animate={activeShape === 'blue' ? { x: 0, y: 0 } : blueJiggle}
        >
          <Blue className='h-full w-full' />
        </motion.div>
      </motion.div>

      {/* Yellow */}
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='yellow'
        initial={positions.yellow}
        animate={positions.yellow}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('yellow')}
      >
        <motion.div
          animate={activeShape === 'yellow' ? { x: 0, y: 0 } : yellowJiggle}
        >
          <Yellow className='h-full w-full' />
        </motion.div>
      </motion.div>

      {/* Green */}
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='green'
        initial={positions.green}
        animate={positions.green}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('green')}
      >
        <motion.div
          animate={activeShape === 'green' ? { x: 0, y: 0 } : greenJiggle}
        >
          <Green className='h-full w-full' />
        </motion.div>
      </motion.div>

      {/* Pink */}
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='pink'
        initial={positions.pink}
        animate={positions.pink}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('pink')}
      >
        <motion.div
          animate={activeShape === 'pink' ? { x: 0, y: 0 } : pinkJiggle}
        >
          <Pink className='h-full w-full' />
        </motion.div>
      </motion.div>

      {/* Image Elements */}
      <AnimatePresence>
        {/* Project Photo */}
        {activeShape == 'blue' && (
          <motion.div
            className='pointer-events-auto absolute z-10 cursor-pointer self-center'
            style={{}}
            key='blue-project'
            initial={{
              ...positions.blue,
              x: `calc(${positions.blue.x} + 30vw)`,
              opacity: 0,
            }}
            animate={positions.blue}
            exit={{
              ...positions.blue,
              x: `calc(${positions.blue.x} - 30vw)`,
              opacity: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            <Image
              className='h-full w-full'
              src='/images/blue-project.png'
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
              alt=''
            />
          </motion.div>
        )}

        {activeShape == 'yellow' && (
          <motion.div
            className='pointer-events-auto absolute z-10 cursor-pointer self-center'
            style={{}}
            key='yellow-project'
            initial={{
              ...positions.yellow,
              x: `calc(${positions.yellow.x} + 30vw)`,
              opacity: 0,
            }}
            animate={positions.yellow}
            exit={{
              ...positions.yellow,
              x: `calc(${positions.yellow.x} - 30vw)`,
              opacity: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            <Image
              className='h-full w-full'
              src='/images/yellow-project.png'
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
              alt=''
            />
          </motion.div>
        )}

        {activeShape == 'green' && (
          <motion.div
            className='pointer-events-auto absolute z-10 cursor-pointer self-center'
            style={{}}
            key='green-project'
            initial={{
              ...positions.green,
              x: `calc(${positions.green.x} + 30vw)`,
              opacity: 0,
            }}
            animate={positions.green}
            exit={{
              ...positions.green,
              x: `calc(${positions.green.x} - 30vw)`,
              opacity: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            <Image
              className='h-full w-full'
              src='/images/green-project.png'
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
              alt=''
            />
          </motion.div>
        )}

        {activeShape == 'pink' && (
          <motion.div
            className='pointer-events-auto absolute z-10 cursor-pointer self-center'
            style={{}}
            key='pink-project'
            initial={{
              ...positions.pink,
              x: `calc(${positions.pink.x} + 30vw)`,
              opacity: 0,
            }}
            animate={positions.pink}
            exit={{
              ...positions.pink,
              x: `calc(${positions.pink.x} - 30vw)`,
              opacity: 0,
            }}
            transition={{
              ease: 'easeInOut',
              duration: 1.5,
            }}
          >
            <Image
              className='h-full w-full'
              src='/images/pink-project-.png'
              fill
              quality={100}
              style={{ objectFit: 'contain' }}
              alt=''
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Info Elements */}
      <AnimatePresence>
        {activeShape == null && !showDefaultMode && (
          <motion.div
            className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
            style={{}}
            key='blue-info'
            initial={{
              x: '0vw',
              y: '40vh',
              width: '85vw',
              height: 'fit-content',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Link
              href='/projects/barcelona-villa'
              className='border-customGray flex h-[9vh] w-full items-center justify-center gap-32 rounded-full border-[.9px] bg-white px-2 py-5 '
            >
              <p className=' text-customGray pb-1 text-center text-8xl font-semibold tracking-wide '>
                View All Projects
              </p>
              <Arrow className='h-24 w-52' />
            </Link>
          </motion.div>
        )}

        {activeShape == 'blue' && (
          <motion.div
            className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
            style={{}}
            key='blue-info'
            initial={{
              x: '0vw',
              y: '40vh',
              width: '85vw',
              height: 'fit-content',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Link
              href='/projects/barcelona-villa'
              className='border-customGray flex h-[9vh] w-full items-center justify-center gap-32 rounded-full border-[.9px] bg-white px-2 py-5 '
            >
              <p className=' text-customGray pb-1 text-center text-8xl font-semibold tracking-wide '>
                View Project
              </p>
              <Arrow className='h-24 w-52' />
            </Link>
          </motion.div>
        )}

        {activeShape == 'yellow' && (
          <motion.div
            className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
            style={{}}
            key='blue-info'
            initial={{
              x: '0vw',
              y: '40vh',
              width: '85vw',
              height: 'fit-content',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Link
              href='/projects/tehran-mall'
              className='border-customGray flex h-[9vh] w-full items-center justify-center gap-32 rounded-full border-[.9px] bg-white px-2 py-5 '
            >
              <p className=' text-customGray pb-1 text-center text-8xl font-semibold tracking-wide '>
                View Project
              </p>
              <Arrow className='h-24 w-52' />
            </Link>
          </motion.div>
        )}

        {activeShape == 'green' && (
          <motion.div
            className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
            style={{}}
            key='blue-info'
            initial={{
              x: '0vw',
              y: '40vh',
              width: '85vw',
              height: 'fit-content',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Link
              href='/projects/the-montana'
              className='border-customGray flex h-[9vh] w-full items-center justify-center gap-32 rounded-full border-[.9px] bg-white px-2 py-5 '
            >
              <p className=' text-customGray pb-1 text-center text-8xl font-semibold tracking-wide '>
                View Project
              </p>
              <Arrow className='h-24 w-52' />
            </Link>
          </motion.div>
        )}

        {activeShape == 'pink' && (
          <motion.div
            className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
            style={{}}
            key='blue-info'
            initial={{
              x: '0vw',
              y: '40vh',
              width: '85vw',
              height: 'fit-content',
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 1.5 }}
          >
            <Link
              href='/projects/tabriz-trade-center'
              className='border-customGray flex h-[9vh] w-full items-center justify-center gap-32 rounded-full border-[.9px] bg-white px-2 py-5 '
            >
              <p className=' text-customGray pb-1 text-center text-8xl font-semibold tracking-wide '>
                View Project
              </p>
              <Arrow className='h-24 w-52' />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
