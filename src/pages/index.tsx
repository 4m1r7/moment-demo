import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';

import Arrow from '~/svg/chevron.svg';

interface Position {
  x: string;
  y: string;
  width: string;
  height: string;
  rotate: number;
  opacity: number;
}
interface stagePositions {
  logo: Position;
  line: Position;
  menu: Position;
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}

const initialPositions: stagePositions = {
  logo: {
    x: '0vw',
    y: '-15vh',
    width: '18vw',
    height: '15rem',
    opacity: 0,
    rotate: 0,
  },
  line: {
    x: '0vw',
    y: '-15vh',
    width: '1vw',
    height: '3.5rem',
    opacity: 0,
    rotate: 0,
  },
  menu: {
    x: '0vw',
    y: '-15vh',
    width: '28vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  blue: {
    x: '28vw',
    y: '0vh',
    width: '17vw',
    height: '17vw',
    opacity: 0,
    rotate: 0,
  },
  yellow: {
    x: '8vw',
    y: '0vh',
    width: '12.5vw',
    height: '12.5vw',
    opacity: 0,
    rotate: 0,
  },
  green: {
    x: '-8vw',
    y: '0vh',
    width: '14vw',
    height: '14vw',
    opacity: 0,
    rotate: 0,
  },
  pink: {
    x: '-28vw',
    y: '0vh',
    width: '14vw',
    height: '14vw',
    opacity: 0,
    rotate: 0,
  },
};
const landingPositions: stagePositions = {
  logo: {
    x: '3vw',
    y: '-58vh',
    width: '83vw',
    height: '40rem',
    opacity: 0.5,
    rotate: 0,
  },
  line: {
    x: '44vw',
    y: '5vh',
    width: '1vw',
    height: '83vw',
    opacity: 1,
    rotate: 90,
  },
  menu: {
    x: '-3vw',
    y: '10vh',
    width: '83vw',
    height: 'fit-content',
    opacity: 1,
    rotate: 0,
  },
  blue: {
    x: '33vw',
    y: '10vh',
    width: '23vw',
    height: '23vw',
    opacity: 1,
    rotate: 65,
  },
  yellow: {
    x: '-37vw',
    y: '12vh',
    width: '15vw',
    height: '15vw',
    opacity: 1,
    rotate: -35,
  },
  green: {
    x: '8vw',
    y: '-6vh',
    width: '35vw',
    height: '35vw',
    opacity: 1,
    rotate: 145,
  },
  pink: {
    x: '-16vw',
    y: '16vh',
    width: '33vw',
    height: '33vw',
    opacity: 1,
    rotate: -75,
  },
};
const stagePositions: { [key: string]: stagePositions } = {
  firstPositions: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '1vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '28vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '3vw',
      y: '2vh',
      width: '17vw',
      height: '17vw',
      opacity: 1,
      rotate: 0,
    },
    yellow: {
      x: '0vw',
      y: '-6vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 1,
      rotate: 0,
    },
    green: {
      x: '-4vw',
      y: '6vh',
      width: '14vw',
      height: '14vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-5vw',
      y: '-7vh',
      width: '14vw',
      height: '14vw',
      opacity: 1,
      rotate: 0,
    },
  },
  defaultPositions: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '20rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '17vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '45vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '26vw',
      y: '-11vh',
      width: '24vw',
      height: '24vw',
      opacity: 1,
      rotate: 6,
    },
    yellow: {
      x: '-24vw',
      y: '14vh',
      width: '19vw',
      height: '19vw',
      opacity: 1,
      rotate: -40,
    },
    green: {
      x: '5vw',
      y: '23vh',
      width: '18vw',
      height: '18vw',
      opacity: 1,
      rotate: 160,
    },
    pink: {
      x: '-11vw',
      y: '-14vh',
      width: '22vw',
      height: '22vw',
      opacity: 1,
      rotate: -18,
    },
  },
  blue: {
    logo: {
      x: '0vw',
      y: '55vh',
      width: '18vw',
      height: '15rem',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: '49vh',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: '45vh',
      width: '28.2vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '14vw',
      y: '8vh',
      width: '58vw',
      height: '58vw',
      opacity: 1,
      rotate: -130,
    },
    yellow: {
      x: '-38vw',
      y: '-30vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 1,
      rotate: 0,
    },
    green: {
      x: '-24vw',
      y: '-23vh',
      width: '23vw',
      height: '23vw',
      opacity: 1,
      rotate: 0,
    },
    pink: {
      x: '-23vw',
      y: '-3vh',
      width: '30.5vw',
      height: '30.5vw',
      opacity: 1,
      rotate: -75,
    },
  },
  yellow: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '52vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '39vw',
      y: '-25vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 150,
    },
    yellow: {
      x: '-23vw',
      y: '5vh',
      width: '43vw',
      height: '43vw',
      opacity: 1,
      rotate: -20,
    },
    green: {
      x: '34vw',
      y: '-9vh',
      width: '18vw',
      height: '18vw',
      opacity: 1,
      rotate: 180,
    },
    pink: {
      x: '25vw',
      y: '-20vh',
      width: '21vw',
      height: '21vw',
      opacity: 1,
      rotate: -60,
    },
  },
  green: {
    logo: {
      x: '0vw',
      y: '-15.8rem',
      width: '18vw',
      height: '',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: '-11.4rem',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: '-8rem',
      width: '28.2vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '38vw',
      y: '-20vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 185,
    },
    yellow: {
      x: '38vw',
      y: '26vh',
      width: '13vw',
      height: '13vw',
      opacity: 1,
      rotate: -10,
    },
    green: {
      x: '15vw',
      y: '3vh',
      width: '51vw',
      height: '51vw',
      opacity: 1,
      rotate: 55,
    },
    pink: {
      x: '-14vw',
      y: '8vh',
      width: '21vw',
      height: '21vw',
      opacity: 1,
      rotate: -20,
    },
  },
  pink: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: '',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '.1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '25vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '32vw',
      y: '16vh',
      width: '15vw',
      height: '15vw',
      opacity: 1,
      rotate: 45,
    },
    yellow: {
      x: '-36vw',
      y: '-20vh',
      width: '11.5vw',
      height: '11.5vw',
      opacity: 1,
      rotate: 30,
    },
    green: {
      x: '19vw',
      y: '27vh',
      width: '12vw',
      height: '12vw',
      opacity: 1,
      rotate: 160,
    },
    pink: {
      x: '10vw',
      y: '-2vh',
      width: '59vw',
      height: '59vw',
      opacity: 1,
      rotate: -70,
    },
  },
};

export default function Home() {
  const [showDefaultMode, setShowDefaultMode] = useState(true);

  const { lastPosition, setLastPosition, homeMode, setHomeMode } =
    usePosition();

  const dynamicInitials = lastPosition ? lastPosition : initialPositions;

  const [positions, setPositions] = useState<stagePositions>(
    homeMode == 'goLanding'
      ? landingPositions
      : stagePositions['firstPositions']
  );
  const [activeShape, setActiveShape] = useState<string | null>(null);

  useEffect(() => {
    setLastPosition(positions);
  }, [positions, setLastPosition]);

  useEffect(() => {
    if (homeMode == 'goLanding') {
      setHomeMode('goDefault');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShapeClick = (shape: string) => {
    if (showDefaultMode || homeMode == 'goDefault') {
      setPositions(stagePositions['defaultPositions']);
      setShowDefaultMode(false);
      setHomeMode('goLanding');
      setActiveShape(null);
    } else if (positions === stagePositions[shape]) {
      setPositions(stagePositions['defaultPositions']);
      setActiveShape(null);
    } else {
      setPositions(stagePositions[shape]);
      setActiveShape(shape);
    }
  };

  const handleLogoClick = () => {
    if (homeMode == 'goInitial' || homeMode == 'goLanding') {
      setPositions(landingPositions);
      setHomeMode('goDefault');
      setShowDefaultMode(false);
      setActiveShape(null);
    } else if (homeMode == 'goDefault') {
      setPositions(stagePositions['defaultPositions']);
      setHomeMode('goLanding');
      setActiveShape(null);
    }
  };

  return (
    <Layout
      activeShape={activeShape}
      positions={positions}
      initialPositions={dynamicInitials}
      handleShapeClick={handleShapeClick}
      handleLogoClick={handleLogoClick}
      noFooter
      landingMode={positions == landingPositions}
    >
      <Seo templateTitle='Home' />

      <main
        key={activeShape}
        className=' items-between pointer-events-none  absolute top-0 z-0 flex h-screen w-full flex-col justify-center overflow-hidden'
      >
        {/* Image Elements */}
        <AnimatePresence>
          {/* Project Photo */}
          {activeShape == 'blue' && (
            <motion.div
              className='pointer-events-auto absolute z-10 cursor-pointer self-center'
              style={{}}
              key='blue-project'
              initial={{
                x: '4vw',
                y: '8vh',
                width: '58vw',
                height: '58vw',
                opacity: 0,
                rotate: -130,
              }}
              animate={{
                x: '14vw',
                y: '8vh',
                width: '58vw',
                height: '58vw',
                opacity: 1,
                rotate: -130,
              }}
              exit={{
                x: '24vw',
                y: '8vh',
                width: '58vw',
                height: '58vw',
                opacity: 0,
                rotate: -130,
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
                x: '-33vw',
                y: '5vh',
                width: '43vw',
                height: '43vw',
                opacity: 0,
                rotate: -20,
              }}
              animate={{
                x: '-23vw',
                y: '5vh',
                width: '43vw',
                height: '43vw',
                opacity: 1,
                rotate: -20,
              }}
              exit={{
                x: '-3vw',
                y: '5vh',
                width: '43vw',
                height: '43vw',
                opacity: 0,
                rotate: -20,
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
                x: '5vw',
                y: '3vh',
                width: '51vw',
                height: '51vw',
                opacity: 0,
                rotate: 55,
              }}
              animate={{
                x: '15vw',
                y: '3vh',
                width: '51vw',
                height: '51vw',
                opacity: 1,
                rotate: 55,
              }}
              exit={{
                x: '25vw',
                y: '3vh',
                width: '51vw',
                height: '51vw',
                opacity: 0,
                rotate: 55,
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
                x: '0vw',
                y: '-2vh',
                width: '59vw',
                height: '59vw',
                opacity: 0,
                rotate: -70,
              }}
              animate={{
                x: '10vw',
                y: '-2vh',
                width: '59vw',
                height: '59vw',
                opacity: 1,
                rotate: -70,
              }}
              exit={{
                x: '20vw',
                y: '-2vh',
                width: '59vw',
                height: '59vw',
                opacity: 0,
                rotate: -70,
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
          {activeShape == 'blue' && (
            <motion.div
              className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
              style={{}}
              key='blue-info'
              initial={{
                x: '47vw',
                y: '-23vh',
                width: '16vw',
                height: '30vh',
                opacity: 0,
              }}
              animate={{
                x: '37vw',
                y: '-23vh',
                width: '16vw',
                height: '30vh',
                opacity: 1,
              }}
              exit={{
                x: '27vw',
                y: '-23vh',
                width: '16vw',
                height: '30vh',
                opacity: 0,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 1.5,
              }}
            >
              <h2 className=' text-customGray text-right text-4xl leading-relaxed tracking-[1rem] '>
                Barcelona Villa
              </h2>
              <p className=' text-customGray text-right text-4xl font-thin leading-relaxed tracking-[1rem] '>
                / 2024
              </p>
              <Link
                href='/projects/barcelona-villa'
                className='border-customGray flex w-full items-center justify-evenly rounded-full border-[.9px] bg-white px-2 py-5 '
              >
                <p className=' text-customGray pb-1 text-center text-2xl font-semibold tracking-wide '>
                  View Project
                </p>
                <Arrow className='h-6 w-12' />
              </Link>
            </motion.div>
          )}

          {activeShape == 'yellow' && (
            <motion.div
              className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer items-end justify-between self-center'
              style={{}}
              key='yellow-info'
              initial={{
                x: '36vw',
                y: '25vh',
                width: '35vw',
                height: '18vh',
                opacity: 0,
              }}
              animate={{
                x: '26vw',
                y: '25vh',
                width: '35vw',
                height: '18vh',
                opacity: 1,
              }}
              exit={{
                x: '16vw',
                y: '25vh',
                width: '35vw',
                height: '18vh',
                opacity: 0,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 1.5,
              }}
            >
              <Link
                href='/projects/tehran-mall'
                className='border-customGray flex h-fit w-1/2 items-center justify-evenly rounded-full border-[.9px] bg-white px-2 py-5 '
              >
                <p className=' text-customGray pb-1 text-center text-2xl font-semibold tracking-wide '>
                  View Project
                </p>
                <Arrow className='h-6 w-12' />
              </Link>
              <div className='flex w-1/2 flex-col gap-10'>
                <h2 className=' text-customGray text-right text-4xl leading-relaxed tracking-[1rem] '>
                  Tehran Mall
                </h2>
                <p className=' text-customGray text-right text-4xl font-thin leading-relaxed tracking-[1rem] '>
                  / 2026
                </p>
              </div>
            </motion.div>
          )}

          {activeShape == 'green' && (
            <motion.div
              className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
              style={{}}
              key='green-info'
              initial={{
                x: '-26vw',
                y: '15vh',
                width: '16vw',
                height: '30vh',
                opacity: 0,
              }}
              animate={{
                x: '-36vw',
                y: '15vh',
                width: '16vw',
                height: '30vh',
                opacity: 1,
              }}
              exit={{
                x: '-46vw',
                y: '15vh',
                width: '16vw',
                height: '30vh',
                opacity: 0,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 1.5,
              }}
            >
              <h2 className=' text-customGray text-left text-4xl leading-relaxed tracking-[1rem] '>
                The Montana
              </h2>
              <p className=' text-customGray text-left text-4xl font-thin leading-relaxed tracking-[1rem] '>
                / 2017
              </p>
              <Link
                href='/projects/the-montana'
                className='border-customGray flex w-full items-center justify-evenly rounded-full border-[.9px] bg-white px-2 py-5 '
              >
                <p className=' text-customGray pb-1 text-center text-2xl font-semibold tracking-wide '>
                  View Project
                </p>
                <Arrow className='h-6 w-12' />
              </Link>
            </motion.div>
          )}

          {activeShape == 'pink' && (
            <motion.div
              className=' project-card pointer-events-auto absolute z-40 flex cursor-pointer flex-col justify-between self-center'
              style={{}}
              key='pink-info'
              initial={{
                x: '-26vw',
                y: '18vh',
                width: '20vw',
                height: '36vh',
                opacity: 0,
              }}
              animate={{
                x: '-36vw',
                y: '18vh',
                width: '20vw',
                height: '36vh',
                opacity: 1,
              }}
              exit={{
                x: '-46vw',
                y: '18vh',
                width: '20vw',
                height: '36vh',
                opacity: 0,
              }}
              transition={{
                ease: 'easeInOut',
                duration: 1.5,
              }}
            >
              <h2 className=' text-customGray text-left text-4xl leading-relaxed tracking-[1rem] '>
                Tabriz Trade Center
              </h2>
              <p className=' text-customGray text-left text-4xl font-thin leading-relaxed tracking-[1rem] '>
                / 2019
              </p>
              <Link
                href='/projects/tabriz-trade-center'
                className='border-customGray mt-16 flex w-full items-center justify-evenly rounded-full border-[.9px] bg-white px-2 py-5 '
              >
                <p className=' text-customGray pb-1 text-center text-2xl font-semibold tracking-wide '>
                  View Project
                </p>
                <Arrow className='h-6 w-12' />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Layout>
  );
}
