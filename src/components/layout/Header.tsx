import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import Logo from '~/svg/logo.svg';

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
}

export default function Header({ positions, initialPositions }: shapeProps) {
  return (
    <header className='pointer-events-none absolute left-0 top-0 flex h-fit w-full items-center justify-start gap-24 p-28'>
      <motion.div
        className='pointer-events-auto absolute'
        style={{}}
        key='logo'
        initial={initialPositions.logo}
        animate={positions.logo}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
      >
        <Link href='/'>
          <Logo className='h-28 w-full' />
        </Link>
      </motion.div>

      <motion.div
        className=' pointer-events-auto ml-[28rem] flex items-center justify-center '
        style={{}}
        key='line'
        initial={initialPositions.line}
        animate={positions.line}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
      >
        <div className='h-full w-[1px] bg-gray-400' />
      </motion.div>

      <motion.ul
        className=' pointer-events-auto flex h-full w-full items-center justify-between '
        style={{}}
        key='menu'
        initial={initialPositions.menu}
        animate={positions.menu}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
      >
        <li className=' text-4xl font-thin text-gray-500'>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className=' text-4xl font-thin text-gray-500 '>
          <Link href='/about'>About</Link>
        </li>
        <li className=' text-4xl font-thin text-gray-500 '>
          <Link href='/contact'>Contact</Link>
        </li>
      </motion.ul>
    </header>
  );
}
