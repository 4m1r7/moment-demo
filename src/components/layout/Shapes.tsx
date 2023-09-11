import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

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
  logo: Position;
  line: Position;
  menu: Position;
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}
interface shapeProps {
  positions: stagePositions;
  initialPositions: stagePositions;
  activeShape?: string | null;
  handleShapeClick: (shape: string) => void;
}

export default function Shapes({
  activeShape,
  positions,
  initialPositions,
  handleShapeClick,
}: shapeProps) {
  return (
    <div className=' items-between pointer-events-none  absolute top-0 z-0 flex h-screen w-full flex-col justify-center overflow-hidden'>
      {/* Shape Elements */}
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center mix-blend-multiply'
        key='blue'
        initial={initialPositions.blue}
        animate={positions.blue}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('blue')}
      >
        <Blue className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='yellow'
        initial={initialPositions.yellow}
        animate={positions.yellow}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('yellow')}
      >
        <Yellow className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='green'
        initial={initialPositions.green}
        animate={positions.green}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('green')}
      >
        <Green className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0 mix-blend-multiply'
        key='pink'
        initial={initialPositions.pink}
        animate={positions.pink}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('pink')}
      >
        <Pink className='h-full w-full' />
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
    </div>
  );
}
