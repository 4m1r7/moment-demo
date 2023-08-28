import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  brightHeader?: boolean;
  handleLogoClick: () => void;
}

export default function Header({
  positions,
  initialPositions,
  brightHeader,
  handleLogoClick,
}: shapeProps) {
  const router = useRouter();

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
        onClick={handleLogoClick}
      >
        <Logo
          className={`h-28 w-full cursor-pointer
                      ${brightHeader ? 'bright-logo' : ''}`}
        />
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
        <div
          className={` h-full w-[1px] ${
            brightHeader ? 'bg-white' : 'bg-gray-400'
          } `}
        />
      </motion.div>

      <motion.ul
        className={` pointer-events-auto flex h-full w-full items-center justify-between text-4xl font-thin
                    ${brightHeader ? 'text-white' : 'text-gray-500'}`}
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
        <li className={router.pathname == '/projects' ? 'font-bold' : ''}>
          <Link href='/projects'>Projects</Link>
        </li>
        <li className={router.pathname == '/about' ? 'font-bold' : ''}>
          <Link href='/about'>About</Link>
        </li>
        <li className={router.pathname == '/contact' ? 'font-semibold' : ''}>
          <Link href='/contact'>Contact</Link>
        </li>
      </motion.ul>
    </header>
  );
}
